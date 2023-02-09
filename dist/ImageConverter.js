"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageConverter = void 0;
var index_1 = require("./linear_algebra/index");
var ImageConverter = /** @class */ (function () {
    function ImageConverter() {
    }
    ImageConverter.prototype.convertImgDataToVector = function (img) {
        return new index_1.Vector([]);
    };
    ImageConverter.prototype.convertVectorTo2DArray = function (vector, img) {
        var imgContent = [];
        // for (let i = 0; i < img.height; i++) {
        //     const row = []
        //     for (let j = 0; j < img.stride; j+=img.channels) {
        //         const n = img.stride * i + j;
        //         let value = '0x';
        //         if (img.channels >= 1)
        //             value += Math.round(vector.components[n]).toString(16).padStart(2, '0');
        //         if (img.channels >= 2)
        //             value += Math.round(vector.components[n+1]).toString(16).padStart(2, '0');
        //         if (img.channels >= 3)
        //             value += Math.round(vector.components[n+2]).toString(16).padStart(2, '0');
        //         if (img.channels >= 4)
        //             value += Math.round(vector.components[n+3]).toString(16).padStart(2, '0');
        //         row.push(+value)
        //     }
        //     imgContent.push(row)
        // }
        return imgContent;
    };
    return ImageConverter;
}());
exports.ImageConverter = ImageConverter;
