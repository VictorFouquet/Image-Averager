"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    /**
     * N dimensions vector
     * @param components Components of the vector
     */
    function Vector(components) {
        this.components = __spreadArray([], __read(components), false);
    }
    /**
     * Gets vector's components
     * @returns This vector's component
     */
    Vector.prototype.getComponents = function () {
        return this.components;
    };
    /** Used by heirs classes to update their named components */
    Vector.prototype.updateComponents = function () { };
    /**
     * Copies vector
     * @returns a deep copy of this vector
     */
    Vector.prototype.copy = function () {
        var v = new Vector(this.components);
        return v;
    };
    /**
     * Creates a new vector,
     * being the result of this vector and another vector addition
     * @param v vector to be added
     * @returns a new vector
     */
    Vector.prototype.add = function (v) {
        var vector = this.copy();
        vector.components = vector.components.reduce(function (acc, cur, i) {
            acc.push(cur + v.components[i]);
            return acc;
        }, []);
        return vector;
    };
    /**
     * Creates a new vector,
     * being the result of the substraction of another vector from this vector
     * @param v vector to be substracted
     * @returns a new vector
     */
    Vector.prototype.sub = function (v) {
        var vector = this.copy();
        vector.components = vector.components.reduce(function (acc, cur, i) {
            acc.push(cur - v.components[i]);
            return acc;
        }, []);
        return vector;
    };
    /**
     * Creates a new vector, being this vector scaled by a scalar
     * @param n number used to scale this vector
     * @returns a new vector
     */
    Vector.prototype.scale = function (n) {
        var vector = this.copy();
        vector.components = vector.components.reduce(function (acc, cur) {
            acc.push(cur * n);
            return acc;
        }, []);
        return vector;
    };
    /**
     * Computes the magnitude of this vector
     * @returns this vector's magnitude
     */
    Vector.prototype.mag = function () {
        return Math.sqrt(this.components.reduce(function (acc, cur) {
            return acc + Math.pow(cur, 2);
        }, 0));
    };
    /**
     * Sets this vector's magnitude updating its components
     * @param n scalar used to set this vector's magnitude
     * @returns this vector with updated components
     */
    Vector.prototype.setMag = function (n) {
        if (n < 0)
            throw new Error("Magnitude should always be greater than or equal to 0, received ".concat(n, "."));
        if (this.mag() != 0) {
            this.components = this.unit().scale(n).components;
            this.updateComponents();
        }
        return this;
    };
    /**
     * Computes the distance from this vector to another vector
     * @param v vector to compute the distance to
     * @returns distance to the other vector
     */
    Vector.prototype.dist = function (v) {
        return Math.sqrt(this.components.reduce(function (acc, cur, i) {
            return acc + Math.pow(v.components[i] - cur, 2);
        }, 0));
    };
    /**
     * Gets this vector with a magnitude of 1 unit
     * @returns the unit vector of this vector
     */
    Vector.prototype.unit = function () {
        if (this.mag() == 0)
            return this.copy();
        return this.scale(1 / this.mag());
    };
    /**
     * Converts this vector to set its magnitude to 1
     * @returns this vector with magnitude of 1 unit
     */
    Vector.prototype.toUnit = function () {
        this.components = __spreadArray([], __read(this.unit().components), false);
        this.updateComponents();
        return this;
    };
    /**
     * Computes the dot product of this vector and another vector
     * @param v vector to compute the dot product with
     * @returns dot product of this vector and the other vector
     */
    Vector.prototype.dot = function (v) {
        if (this.components.length != v.components.length)
            throw new Error('Please provide vectors of same dimension. ' +
                "First has ".concat(this.components.length, " components whereas second has ").concat(v.components.length, "."));
        return this.components.reduce(function (acc, cur, i) {
            return acc + cur * v.components[i];
        }, 0);
    };
    /**
     * Computes the angle from this vector to another vector
     * @param v vector to get the angle to
     * @returns angle to other vector in radians
     */
    Vector.prototype.angleTo = function (v) {
        if (this.mag() == 0)
            throw new Error("First vector has a magnitude of zero, leading to division by zero");
        else if (v.mag() == 0)
            throw new Error("Second vector has a magnitude of zero, leading to division by zero");
        return Math.acos(this.dot(v) / (this.mag() * v.mag()));
    };
    return Vector;
}());
exports.Vector = Vector;
