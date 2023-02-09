import { _Vector } from "./Vector.interface"

export interface _Vector3 extends _Vector {
    x: number
    y: number
    z: number

    // Overides parent methods that return a Vector type object
    copy()            : _Vector3
    add(v: _Vector3)  : _Vector3
    sub(v: _Vector3)  : _Vector3
    scale(n: number)  : _Vector3
    unit()            : _Vector3
    toUnit()          : _Vector3
    setMag(n: number) : _Vector3

    // Vector3 specific methods
    convertFromVector(f: Function) : _Vector3
    cross(v: _Vector3)             : _Vector3
}
