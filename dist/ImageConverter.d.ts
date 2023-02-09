import { _ImageConverter } from "./ImageConverter.interface";
import { Vector } from "./linear_algebra/index";
export declare class ImageConverter implements _ImageConverter {
    convertImgDataToVector(img: ImageData): Vector;
    convertVectorTo2DArray(vector: Vector, img: ImageData): number[][];
}
