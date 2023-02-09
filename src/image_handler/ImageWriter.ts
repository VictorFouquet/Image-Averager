import * as sharp from "sharp";

import { _ImageWriter } from "./interface/ImageWriter.interface";

/**
 * Util class in charge of writing images to the user's file system
 */
export class ImageWriter implements _ImageWriter {
    /**
     * Writes a JPG or PNG image to the user's file system
     * @param data image's pixels data
     * @param width image's width in pixels
     * @param height image's height in pixels
     * @param ext image's extension
     * @param out image's name
     * @returns Promise resolved when image has been written
     */
    async writeImgSync(data: number[], width: number, height: number, ext: string, out: string): Promise<null> {
        return new Promise(async (resolve, reject) => {
            const writable = Uint8Array.from(data);
            const img = sharp(writable, {
                raw: {
                    width: width,
                    height: height,
                    channels: 4
                }
            })

            if (ext == 'png') img.png()
            else if (ext == 'jpg' || ext == 'jpeg') img.jpeg();
            
            await img.toFile(out)
            
            resolve(null)
        })
    }
}
