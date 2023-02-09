import { _ImageWriter } from "./ImageWriter.interface";
export declare class ImageWriter implements _ImageWriter {
    writeImgSync(data: number[], width: number, height: number, out: string): Promise<null>;
}
