export interface _Vector {
    components         : number[]

    getComponents()    : number[]
    updateComponents() : void
    copy()             : _Vector

    mag()              : number
    dist(v: _Vector)   : number
    add(v: _Vector)    : _Vector
    sub(v: _Vector)    : _Vector
    scale(n: number)   : _Vector
    unit()             : _Vector
    toUnit()           : _Vector
    setMag(n: number)  : _Vector
    angleTo(v: _Vector): number
    dot(v: _Vector)    : number
}
