import { _Vector } from "./interface/Vector.interface";

export class Vector implements _Vector {
    public components: number[]
    
    /**
     * N dimensions vector
     * @param components Components of the vector
     */
    constructor(components: number[]) {
        this.components = [...components];
    }

    /**
     * Gets vector's components
     * @returns This vector's component
     */
    getComponents(): number[] {
        return this.components;
    }
    
    /** Used by heirs classes to update their named components */
    updateComponents(): void {}

    /**
     * Copies vector
     * @returns a deep copy of this vector
     */
    copy() : Vector {
        const v: Vector = new Vector(this.components);
        return v;
    }

    /**
     * Creates a new vector,
     * being the result of this vector and another vector addition
     * @param v vector to be added
     * @returns a new vector
     */
    add(v: Vector) : Vector {
        const vector = this.copy();
        vector.components = vector.components.reduce(
            (acc: number[], cur: number, i: number) : number[] => {
                acc.push(cur + v.components[i]);
                return acc;
            },
            []
        );

        return vector;
    }

    /**
     * Creates a new vector,
     * being the result of the substraction of another vector from this vector
     * @param v vector to be substracted
     * @returns a new vector
     */
    sub(v: Vector) : Vector {
        const vector = this.copy();
        vector.components = vector.components.reduce(
            (acc: number[], cur: number, i: number) : number[] => {
                acc.push(cur - v.components[i]);
                return acc;
            },
            []
        );

        return vector;
    }

    /**
     * Creates a new vector, being this vector scaled by a scalar
     * @param n number used to scale this vector
     * @returns a new vector
     */
    scale(n: number) : Vector {
        const vector = this.copy();
        vector.components = vector.components.reduce(
            (acc: number[], cur: number) : number[] => {
                acc.push(cur * n);
                return acc;
            },
            []
        );

        return vector;
    }

    /**
     * Computes the magnitude of this vector
     * @returns this vector's magnitude
     */
    mag() : number {
        return Math.sqrt(
            this.components.reduce(
                (acc: number, cur: number) : number => {
                    return acc + Math.pow(cur, 2);
                },
                0
            )
        )
    }

    /**
     * Sets this vector's magnitude updating its components
     * @param n scalar used to set this vector's magnitude
     * @returns this vector with updated components
     */
    setMag(n: number): Vector {
        if (n < 0) throw new Error(
            `Magnitude should always be greater than or equal to 0, received ${n}.`
        );

        if (this.mag() != 0) {
            this.components = this.unit().scale(n).components;
            this.updateComponents();
        }
        return this;
    }

    /**
     * Computes the distance from this vector to another vector
     * @param v vector to compute the distance to
     * @returns distance to the other vector
     */
    dist(v: Vector) : number {
        return Math.sqrt(
            this.components.reduce(
                (acc: number, cur: number, i: number) : number => {
                    return acc + Math.pow(v.components[i] - cur, 2)
                },
                0
            )
        )
    }

    /**
     * Gets this vector with a magnitude of 1 unit
     * @returns the unit vector of this vector
     */
    unit() : Vector {
        if (this.mag() == 0) return this.copy();
        return this.scale(1/this.mag());
    }

    /**
     * Converts this vector to set its magnitude to 1
     * @returns this vector with magnitude of 1 unit
     */
    toUnit() : Vector {
        this.components = [...this.unit().components];
        this.updateComponents();
        return this;
    }

    /**
     * Computes the dot product of this vector and another vector
     * @param v vector to compute the dot product with
     * @returns dot product of this vector and the other vector
     */
    dot(v: Vector) : number {
        if (this.components.length != v.components.length)
            throw new Error(
                'Please provide vectors of same dimension. ' +
                `First has ${this.components.length} components whereas second has ${v.components.length}.`
            )
        
        return this.components.reduce(
            (acc: number, cur: number, i: number) : number => {
                return acc + cur * v.components[i];
            },
            0
        )
    }

    /**
     * Computes the angle from this vector to another vector
     * @param v vector to get the angle to
     * @returns angle to other vector in radians
     */
    angleTo(v: Vector): number {
        if (this.mag() == 0)
            throw new Error("First vector has a magnitude of zero, leading to division by zero");
        else if (v.mag() == 0)
            throw new Error("Second vector has a magnitude of zero, leading to division by zero");
        
        return Math.acos(
            this.dot(v) / (this.mag() * v.mag())
        )
    }
}