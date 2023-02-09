import { _ImageProcesser } from "./ImageProcesser.interface";
import { ImgData } from "./ImageReader.interface";
import { ImageReader } from "./ImageReader";
import { ImageWriter } from "./ImageWriter";
export declare class ImageProcesser implements _ImageProcesser {
    imgReader: ImageReader;
    imgWriter: ImageWriter;
    constructor();
    resize(imgData: ImgData, width: number, height: number): number[];
    readImgSync(src: string): Promise<ImgData>;
    writeImgSync(data: number[], width: number, height: number, out: string): Promise<null>;
}
