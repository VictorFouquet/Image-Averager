import { ImgData, _ImageReader } from "./ImageReader.interface";
export declare class ImageReader implements _ImageReader {
    readImgSync(src: string): Promise<ImgData>;
}
