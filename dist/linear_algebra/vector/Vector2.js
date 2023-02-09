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
exports.Vector2 = void 0;
var Vector_1 = require("./Vector");
var Vector2 = /** @class */ (function (_super) {
    __extends(Vector2, _super);
    /**
     * 2 dimensions vector
     * @param x x component of the vector
     * @param y y component of the vector
     */
    function Vector2(x, y) {
        var _this = _super.call(this, [x, y]) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    /**
     * Converts back to Vector2 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector2
     */
    Vector2.prototype.convertFromVector = function (f) {
        var components = f().components;
        return new Vector2(components[0], components[1]);
    };
    Vector2.prototype.copy = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.copy.call(_this); });
    };
    Vector2.prototype.add = function (v) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.add.call(_this, v); });
    };
    Vector2.prototype.sub = function (v) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.sub.call(_this, v); });
    };
    Vector2.prototype.scale = function (n) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.scale.call(_this, n); });
    };
    Vector2.prototype.unit = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.unit.call(_this); });
    };
    Vector2.prototype.toUnit = function () {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.toUnit.call(_this); });
    };
    Vector2.prototype.setMag = function (n) {
        var _this = this;
        return this.convertFromVector(function () { return _super.prototype.setMag.call(_this, n); });
    };
    /** Sets x and y named components */
    Vector2.prototype.updateComponents = function () {
        this.x = this.components[0];
        this.y = this.components[1];
    };
    /**
     * Computes cross product between this vector and another vector.
     * As both x and y components will be set to 0, only the extended third component is kept.
     * @param v Vector2 to compute the cross product with
     * @returns value of extended third component
     */
    Vector2.prototype.cross = function (v) {
        return this.x * v.y - this.y * v.x;
    };
    /**
     * Computes this vector slope's signed angle to x axis
     * @returns signed angle of this vector
     */
    Vector2.prototype.signedAngle = function () {
        return Math.atan2(this.y, this.x);
    };
    /**
     * Computes signed angle from this vector to another vector
     * @param v vector to get the signed angle from
     * @returns angle from this vector to another vector
     */
    Vector2.prototype.signedAngleTo = function (v) {
        var theta = this.angleTo(v);
        return this.cross(v) >= 0 ? theta : -theta;
    };
    /**
     * Computes the result of rotating this vector around origin
     * @param n angle in radians
     * @returns a new rotated vector
     */
    Vector2.prototype.rotate = function (n) {
        return new Vector2(Math.cos(n) * this.x - Math.sin(n) * this.y, Math.sin(n) * this.x + Math.cos(n) * this.y);
    };
    /**
     * Compute the result of rotating this vector around another vector
     * @param n angle in radians
     * @param v Vector to take as origin
     * @returns a new rotated vector
     */
    Vector2.prototype.rotateAround = function (n, v) {
        return this.sub(v).rotate(n).add(v);
    };
    return Vector2;
}(Vector_1.Vector));
exports.Vector2 = Vector2;
