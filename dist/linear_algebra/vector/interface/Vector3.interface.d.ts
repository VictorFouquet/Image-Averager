import { _Vector } from "./Vector.interface";
export interface _Vector3 extends _Vector {
    x: number;
    y: number;
    z: number;
    copy(): _Vector3;
    add(v: _Vector3): _Vector3;
    sub(v: _Vector3): _Vector3;
    scale(n: number): _Vector3;
    unit(): _Vector3;
    toUnit(): _Vector3;
    setMag(n: number): _Vector3;
    convertFromVector(f: Function): _Vector3;
    cross(v: _Vector3): _Vector3;
}
