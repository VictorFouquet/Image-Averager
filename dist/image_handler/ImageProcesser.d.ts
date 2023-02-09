import { _ImageProcesser } from "./interface/ImageProcesser.interface";
import { ImgData } from "./interface/ImageReader.interface";
import { ImageReader } from "./ImageReader";
import { ImageWriter } from "./ImageWriter";
/**
 * Wrapper class used to process images and read/write on the user's file system
 */
export declare class ImageProcesser implements _ImageProcesser {
    imgReader: ImageReader;
    imgWriter: ImageWriter;
    constructor();
    /**
     * Resizes an image using closest neighbor algorithm
     * @param imgData Input image's data containing is pixels' values, width and height
     * @param width Output image width
     * @param height Output image height
     * @returns Resized image's pixels data
     */
    resize(imgData: ImgData, width: number, height: number): number[];
    /**
     * Wrapper function to read an image from user's file system
     * @param src Path to the image to read
     * @returns Promise resolved with the image's data
     */
    readImgSync(src: string): Promise<ImgData>;
    /**
     * Wrapper function to write an image to the user's file system
     * @param data Pixels' values
     * @param width Output image's width
     * @param height Output image's height
     * @param ext Output image's extension
     * @param out Output image's name
     * @returns Promise resolved when the image has been written
     */
    writeImgSync(data: number[], width: number, height: number, ext: string, out: string): Promise<null>;
}
