import { _ImageReader, ImgData } from "./ImageReader.interface";
import { _ImageWriter } from "./ImageWriter.interface";
export interface _ImageProcesser {
    imgWriter: _ImageWriter;
    imgReader: _ImageReader;
    resize(imgData: ImgData, width: number, height: number): number[];
    readImgSync(src: string): Promise<ImgData>;
    writeImgSync(data: number[], width: number, height: number, ext: string, out: string): Promise<null>;
}
