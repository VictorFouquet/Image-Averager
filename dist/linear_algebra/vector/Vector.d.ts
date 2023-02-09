import { _Vector } from "./interface/Vector.interface";
export declare class Vector implements _Vector {
    components: number[];
    /**
     * N dimensions vector
     * @param components Components of the vector
     */
    constructor(components: number[]);
    /**
     * Gets vector's components
     * @returns This vector's component
     */
    getComponents(): number[];
    /** Used by heirs classes to update their named components */
    updateComponents(): void;
    /**
     * Copies vector
     * @returns a deep copy of this vector
     */
    copy(): Vector;
    /**
     * Creates a new vector,
     * being the result of this vector and another vector addition
     * @param v vector to be added
     * @returns a new vector
     */
    add(v: Vector): Vector;
    /**
     * Creates a new vector,
     * being the result of the substraction of another vector from this vector
     * @param v vector to be substracted
     * @returns a new vector
     */
    sub(v: Vector): Vector;
    /**
     * Creates a new vector, being this vector scaled by a scalar
     * @param n number used to scale this vector
     * @returns a new vector
     */
    scale(n: number): Vector;
    /**
     * Computes the magnitude of this vector
     * @returns this vector's magnitude
     */
    mag(): number;
    /**
     * Sets this vector's magnitude updating its components
     * @param n scalar used to set this vector's magnitude
     * @returns this vector with updated components
     */
    setMag(n: number): Vector;
    /**
     * Computes the distance from this vector to another vector
     * @param v vector to compute the distance to
     * @returns distance to the other vector
     */
    dist(v: Vector): number;
    /**
     * Gets this vector with a magnitude of 1 unit
     * @returns the unit vector of this vector
     */
    unit(): Vector;
    /**
     * Converts this vector to set its magnitude to 1
     * @returns this vector with magnitude of 1 unit
     */
    toUnit(): Vector;
    /**
     * Computes the dot product of this vector and another vector
     * @param v vector to compute the dot product with
     * @returns dot product of this vector and the other vector
     */
    dot(v: Vector): number;
    /**
     * Computes the angle from this vector to another vector
     * @param v vector to get the angle to
     * @returns angle to other vector in radians
     */
    angleTo(v: Vector): number;
}
