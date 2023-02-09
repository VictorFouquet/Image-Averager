import { Vector }   from "./Vector";
import { _Vector3 } from "./interface/Vector3.interface";

export class Vector3 extends Vector implements _Vector3 {
    x: number;
    y: number;
    z: number;

    /**
     * Three dimensions vector
     * @param x value of x component
     * @param y value of y component
     * @param z value of z component
     */
    constructor(x: number, y: number, z: number) {
        super([x, y, z])
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Converts back to Vector3 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector3
     */
    convertFromVector(f: Function) : Vector3 {
        const components : number = f().components;
        return new Vector3(components[0], components[1], components[2]);
    }

    copy() : Vector3 {
        return this.convertFromVector(() => super.copy());
    }

    add(v: Vector3) : Vector3 {
        return this.convertFromVector(() => super.add(v));
    }

    sub(v: Vector3) : Vector3 {
        return this.convertFromVector(() => super.sub(v));
    }

    scale(n: number): Vector3 {
        return this.convertFromVector(() => super.scale(n));
    }

    unit() : Vector3 {
        return this.convertFromVector(() => super.unit());
    }

    toUnit(): Vector3 {
        return this.convertFromVector(() => super.toUnit());
    }

    setMag(n: number): Vector3 {
        return this.convertFromVector(() => super.setMag(n));
    }

    /** Updates x, y, z values from components array */
    updateComponents(): void {
        this.x = this.components[0];
        this.y = this.components[1];
        this.z = this.components[2];
    }

    /**
     * Computes cross product between this vector and another vector
     * @param v Vector to compute cross product with
     * @returns Vector created by crossing this vector with another vector
     */
    cross(v: Vector3): Vector3 {
        return new Vector3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        )
    }
}
