import { Vector } from "./Vector";
import { _Vector2 } from "./interface/Vector2.interface";
export declare class Vector2 extends Vector implements _Vector2 {
    x: number;
    y: number;
    /**
     * 2 dimensions vector
     * @param x x component of the vector
     * @param y y component of the vector
     */
    constructor(x: number, y: number);
    /**
     * Converts back to Vector2 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector2
     */
    convertFromVector(f: Function): Vector2;
    copy(): Vector2;
    add(v: Vector2): Vector2;
    sub(v: Vector2): Vector2;
    scale(n: number): Vector2;
    unit(): Vector2;
    toUnit(): Vector2;
    setMag(n: number): Vector2;
    /** Sets x and y named components */
    updateComponents(): void;
    /**
     * Computes cross product between this vector and another vector.
     * As both x and y components will be set to 0, only the extended third component is kept.
     * @param v Vector2 to compute the cross product with
     * @returns value of extended third component
     */
    cross(v: Vector2): number;
    /**
     * Computes this vector slope's signed angle to x axis
     * @returns signed angle of this vector
     */
    signedAngle(): number;
    /**
     * Computes signed angle from this vector to another vector
     * @param v vector to get the signed angle from
     * @returns angle from this vector to another vector
     */
    signedAngleTo(v: Vector2): number;
    /**
     * Computes the result of rotating this vector around origin
     * @param n angle in radians
     * @returns a new rotated vector
     */
    rotate(n: number): Vector2;
    /**
     * Compute the result of rotating this vector around another vector
     * @param n angle in radians
     * @param v Vector to take as origin
     * @returns a new rotated vector
     */
    rotateAround(n: number, v: Vector2): Vector2;
}
