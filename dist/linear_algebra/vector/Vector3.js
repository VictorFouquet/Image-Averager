"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
var Vector_1 = require("./Vector");
var Vector3 = /** @class */ (function (_super) {
    __extends(Vector3, _super);
    /**
     * Three dimensions vector
     * @param x value of x component
     * @param y value of y component
     * @param z value of z component
     */
    function Vector3(x, y, z) {
        var _this = _super.call(this, [x, y, z]) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    /**
     * Converts back to Vector3 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector3
     */
    Vector3.prototype.convertFromVector = function (f) {
        var components = f().components;
        return new Vector3(components[0], components[1], components[2]);
    };
    Vector3.prototype.copy = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.copy.call(_this); });
    };
    Vector3.prototype.add = function (v) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.add.call(_this, v); });
    };
    Vector3.prototype.sub = function (v) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.sub.call(_this, v); });
    };
    Vector3.prototype.scale = function (n) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.scale.call(_this, n); });
    };
    Vector3.prototype.unit = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.unit.call(_this); });
    };
    Vector3.prototype.toUnit = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.toUnit.call(_this); });
    };
    Vector3.prototype.setMag = function (n) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.setMag.call(_this, n); });
    };
    /** Updates x, y, z values from components array */
    Vector3.prototype.updateComponents = function () {
        this.x = this.components[0];
        this.y = this.components[1];
        this.z = this.components[2];
    };
    /**
     * Computes cross product between this vector and another vector
     * @param v Vector to compute cross product with
     * @returns Vector created by crossing this vector with another vector
     */
    Vector3.prototype.cross = function (v) {
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    };
    return Vector3;
}(Vector_1.Vector));
exports.Vector3 = Vector3;
