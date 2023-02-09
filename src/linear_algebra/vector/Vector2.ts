import { Vector }   from "./Vector";
import { _Vector2 } from "./interface/Vector2.interface";

export class Vector2 extends Vector implements _Vector2 {
    x: number;
    y: number;

    /**
     * 2 dimensions vector
     * @param x x component of the vector
     * @param y y component of the vector
     */
    constructor(x: number, y: number) {
        super([x, y])
        this.x = x;
        this.y = y;
    }

    /**
     * Converts back to Vector2 after parent function call returning Vector
     * @param f parent's function to be called
     * @returns Vector converted to Vector2
     */
    convertFromVector(f: Function) : Vector2 {
        const components : number = f().components;
        return new Vector2(components[0], components[1]);
    }

    copy() : Vector2 {
        return this.convertFromVector(() => super.copy());
    }

    add(v: Vector2) : Vector2 {
        return this.convertFromVector(() => super.add(v));
    }

    sub(v: Vector2) : Vector2 {
        return this.convertFromVector(() => super.sub(v));
    }

    scale(n: number): Vector2 {
        return this.convertFromVector(() => super.scale(n));
    }

    unit() : Vector2 {
        return this.convertFromVector(() => super.unit());
    }

    toUnit(): Vector2 {
        return this.convertFromVector(() => super.toUnit());
    }

    setMag(n: number): Vector2 {
        return this.convertFromVector(() => super.setMag(n));
    }

    /** Sets x and y named components */
    updateComponents(): void {
        this.x = this.components[0];
        this.y = this.components[1];
    }

    /**
     * Computes cross product between this vector and another vector.
     * As both x and y components will be set to 0, only the extended third component is kept.
     * @param v Vector2 to compute the cross product with
     * @returns value of extended third component
     */
    cross(v: Vector2): number {
        return this.x * v.y - this.y * v.x;
    }

    /**
     * Computes this vector slope's signed angle to x axis
     * @returns signed angle of this vector
     */
    signedAngle(): number {
        return Math.atan2(this.y, this.x)
    }

    /**
     * Computes signed angle from this vector to another vector
     * @param v vector to get the signed angle from
     * @returns angle from this vector to another vector
     */
    signedAngleTo(v: Vector2): number {
        const theta : number = this.angleTo(v);
        return this.cross(v) >= 0 ? theta : -theta;
    }

    /**
     * Computes the result of rotating this vector around origin
     * @param n angle in radians
     * @returns a new rotated vector
     */
    rotate(n: number): Vector2 {
        return new Vector2(
            Math.cos(n) * this.x - Math.sin(n) * this.y,
            Math.sin(n) * this.x + Math.cos(n) * this.y
        );
    }

    /**
     * Compute the result of rotating this vector around another vector
     * @param n angle in radians
     * @param v Vector to take as origin
     * @returns a new rotated vector
     */
    rotateAround(n: number, v: Vector2): Vector2 {
        return this.sub(v).rotate(n).add(v);
    }
}
