import  * as sharp from "sharp";

import { ImgData, _ImageReader } from "./interface/ImageReader.interface";

/**
 * Util class in charge of reading images from the user's file system
 */
export class ImageReader implements _ImageReader {
    /**
     * Reads an image from the user's file system
     * @param src path to the image to read
     * @returns ImgData containing the image's pixel data, width and height
     */
    async readImgSync(src: string): Promise<ImgData> {
        return new Promise(async (resolve, reject) => {
            const img: sharp.Sharp     = await sharp(src).ensureAlpha();
            const meta: sharp.Metadata = await img.metadata();
            const data: Buffer         = await img.raw().toBuffer();

            resolve({
                width: meta.width,
                height: meta.height,
                data: data
            })
        })
    }
}