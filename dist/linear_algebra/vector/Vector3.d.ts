import { Vector } from "./Vector";
import { _Vector3 } from "./interface/Vector3.interface";
export declare class Vector3 extends Vector implements _Vector3 {
    x: number;
    y: number;
    z: number;
    /**
     * Three dimensions vector
     * @param x value of x component
     * @param y value of y component
     * @param z value of z component
     */
    constructor(x: number, y: number, z: number);
    /**
     * Converts back to Vector3 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector3
     */
    convertFromVector(f: Function): Vector3;
    copy(): Vector3;
    add(v: Vector3): Vector3;
    sub(v: Vector3): Vector3;
    scale(n: number): Vector3;
    unit(): Vector3;
    toUnit(): Vector3;
    setMag(n: number): Vector3;
    /** Updates x, y, z values from components array */
    updateComponents(): void;
    /**
     * Computes cross product between this vector and another vector
     * @param v Vector to compute cross product with
     * @returns Vector created by crossing this vector with another vector
     */
    cross(v: Vector3): Vector3;
}
