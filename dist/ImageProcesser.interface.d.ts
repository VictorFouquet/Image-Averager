import { ImageReader } from "./ImageReader";
import { ImgData } from "./ImageReader.interface";
import { ImageWriter } from "./ImageWriter";
export interface _ImageProcesser {
    imgWriter: ImageWriter;
    imgReader: ImageReader;
    resize(imgData: ImgData, width: number, height: number): number[];
    readImgSync(src: string): Promise<ImgData>;
    writeImgSync(data: number[], width: number, height: number, out: string): Promise<null>;
}
