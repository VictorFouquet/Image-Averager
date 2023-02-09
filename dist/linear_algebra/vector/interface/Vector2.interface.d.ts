import { _Vector } from "./Vector.interface";
export interface _Vector2 extends _Vector {
    x: number;
    y: number;
    copy(): _Vector2;
    add(v: _Vector2): _Vector2;
    sub(v: _Vector2): _Vector2;
    scale(n: number): _Vector2;
    unit(): _Vector2;
    toUnit(): _Vector2;
    setMag(n: number): _Vector2;
    convertFromVector(f: Function): _Vector2;
    cross(v: _Vector2): number;
    signedAngle(): number;
    signedAngleTo(v: _Vector2): number;
    rotate(n: number): _Vector2;
    rotateAround(n: number, v: _Vector2): _Vector2;
}
