import { Vector } from "./linear_algebra/index";
export interface _ImageConverter {
    convertImgDataToVector(img: ImageData): Vector;
    convertVectorTo2DArray(vector: Vector, img: ImageData): number[][];
}
