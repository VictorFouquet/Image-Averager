import { _ImageWriter } from "./interface/ImageWriter.interface";
/**
 * Util class in charge of writing images to the user's file system
 */
export declare class ImageWriter implements _ImageWriter {
    /**
     * Writes a JPG or PNG image to the user's file system
     * @param data image's pixels data
     * @param width image's width in pixels
     * @param height image's height in pixels
     * @param ext image's extension
     * @param out image's name
     * @returns Promise resolved when image has been written
     */
    writeImgSync(data: number[], width: number, height: number, ext: string, out: string): Promise<null>;
}
