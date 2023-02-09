import { _ImageProcesser } from "./interface/ImageProcesser.interface";
import { ImgData } from "./interface/ImageReader.interface";
import { ImageReader } from "./ImageReader";
import { ImageWriter } from "./ImageWriter";

/**
 * Wrapper class used to process images and read/write on the user's file system
 */
export class ImageProcesser implements _ImageProcesser {
    imgReader: ImageReader;
    imgWriter: ImageWriter;

    constructor() {
        this.imgReader = new ImageReader();
        this.imgWriter = new ImageWriter();
    }

    /**
     * Resizes an image using closest neighbor algorithm
     * @param imgData Input image's data containing is pixels' values, width and height
     * @param width Output image width
     * @param height Output image height
     * @returns Resized image's pixels data
     */
    resize(imgData: ImgData, width: number, height: number): number[] {
        const channelCount: number = imgData.data.length / (imgData.width * imgData.height);
        const resizedImg: number[] = [];

        for (let y=0; y < height; y++) {
            for (let x=0; x < width; x++) {

                const _x: number = Math.floor(imgData.width  * x / width);
                const _y: number = Math.floor(imgData.height * y / height);

                const idx: number = (_y * imgData.width +_x) * channelCount;
                const r: number = idx;
                const g: number = idx + 1;
                const b: number = idx + 2;
                const a: number = idx + 3;

                resizedImg.push(imgData.data[r]);
                resizedImg.push(imgData.data[g]);
                resizedImg.push(imgData.data[b]);
                resizedImg.push(imgData.data[a]);
            }
        }

        return resizedImg;
    }

    /**
     * Wrapper function to read an image from user's file system
     * @param src Path to the image to read
     * @returns Promise resolved with the image's data
     */
    async readImgSync(src: string): Promise<ImgData> {
        return new Promise(async (resolve, revject) => {
            const imgData: ImgData = await this.imgReader.readImgSync(src);
            resolve(imgData);
        })
    }

    /**
     * Wrapper function to write an image to the user's file system
     * @param data Pixels' values
     * @param width Output image's width
     * @param height Output image's height
     * @param ext Output image's extension
     * @param out Output image's name
     * @returns Promise resolved when the image has been written
     */
    async writeImgSync(data: number[], width: number, height: number, ext:string, out: string): Promise<null> {
        return new Promise(async (resolve, reject) => {
            await this.imgWriter.writeImgSync(data, width, height, ext, out);
            resolve(null);
        })
    }
}