import { ImgData, _ImageReader } from "./interface/ImageReader.interface";
/**
 * Util class in charge of reading images from the user's file system
 */
export declare class ImageReader implements _ImageReader {
    /**
     * Reads an image from the user's file system
     * @param src path to the image to read
     * @returns ImgData containing the image's pixel data, width and height
     */
    readImgSync(src: string): Promise<ImgData>;
}
