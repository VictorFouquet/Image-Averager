"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var fs = require("fs");
var path = require("path");
var ImageProcesser_1 = require("./image_handler/ImageProcesser");
var index_1 = require("./linear_algebra/index");
var supportedExtensions = ['png', 'jpeg', 'jpg'];
var staticFolder = "static";
var inputFolder = path.join(staticFolder, "input_images");
var outputFolder = path.join(staticFolder, "output_images");
var App = /** @class */ (function () {
    function App() {
    }
    /**
     * Reads and parses the JSON filled in by the user
     * @returns user config for output image
     */
    App.prototype.getConfig = function () {
        var imgConfig = JSON.parse(fs.readFileSync("processing.config.json").toString());
        // Throws error if user tries to create a file that isn't supported        
        if (!supportedExtensions.includes(imgConfig.outExt))
            throw "Only supported extensions are ".concat(supportedExtensions.join(', '), ". Received ").concat(imgConfig.outExt);
        // Appends a timestamp to the output file name if it already exists and override is set to false
        var outputCtt = fs.readdirSync(outputFolder);
        var outputWithExt = "".concat(imgConfig.outName, ".").concat(imgConfig.outExt);
        var output = imgConfig.outName;
        if (outputCtt.includes(outputWithExt) && !imgConfig.override)
            output += Date.now();
        return {
            output: output,
            ext: imgConfig.outExt,
            width: imgConfig.outWidth,
            height: imgConfig.outHeight
        };
    };
    /**
     * Main entry point of the application
     * @returns Promise resolved when the average image is created
     */
    App.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var imgProcesser, _a, width, height, ext, output, folderCtt, imgCount, barycenter, i, imgPath, originalImg, resizedImg;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    imgProcesser = new ImageProcesser_1.ImageProcesser();
                                    _a = this.getConfig(), width = _a.width, height = _a.height, ext = _a.ext, output = _a.output;
                                    folderCtt = fs.readdirSync(inputFolder);
                                    imgCount = folderCtt.length;
                                    barycenter = new index_1.Vector([]);
                                    i = 0;
                                    _b.label = 1;
                                case 1:
                                    if (!(i < imgCount)) return [3 /*break*/, 5];
                                    console.log("Processing image... ".concat(i + 1, "/").concat(imgCount));
                                    imgPath = path.join(inputFolder, folderCtt[i]);
                                    return [4 /*yield*/, imgProcesser.readImgSync(imgPath)];
                                case 2:
                                    originalImg = _b.sent();
                                    return [4 /*yield*/, imgProcesser.resize(originalImg, width, height)];
                                case 3:
                                    resizedImg = _b.sent();
                                    // If vector has no component, set its component with resized img,
                                    // Else create new vector and add it to initial vector
                                    if (barycenter.components.length) {
                                        barycenter = barycenter.add(new index_1.Vector(resizedImg));
                                    }
                                    else {
                                        barycenter.components = resizedImg;
                                    }
                                    _b.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 5:
                                    // Scale vector by 1 over number of input images
                                    barycenter = barycenter.scale(1 / imgCount);
                                    // Writes average image to file system
                                    return [4 /*yield*/, imgProcesser.writeImgSync(barycenter.components.map(function (n) { return Math.round(n); }), width, height, ext, path.join(outputFolder, "".concat(output, ".").concat(ext)))];
                                case 6:
                                    // Writes average image to file system
                                    _b.sent();
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return App;
}());
exports.App = App;
