import * as fs from "fs";
import * as path from "path";

import { ImgData } from "./image_handler/interface/ImageReader.interface";
import { ImageProcesser } from "./image_handler/ImageProcesser";
import { Vector } from "./linear_algebra/index";

type Config = {
    output: string,
    ext:    string,
    width:  number,
    height: number
}

const supportedExtensions: string[] = ['png', 'jpeg', 'jpg']
const staticFolder:        string   = "static";
const inputFolder:         string   = path.join(staticFolder, "input_images");
const outputFolder:        string   = path.join(staticFolder, "output_images");


export class App {

    /**
     * Reads and parses the JSON filled in by the user
     * @returns user config for output image
     */
    getConfig(): Config {
        const imgConfig = JSON.parse(fs.readFileSync("processing.config.json").toString());
        
        // Throws error if user tries to create a file that isn't supported        
        if (!supportedExtensions.includes(imgConfig.outExt))
            throw `Only supported extensions are ${supportedExtensions.join(', ')}. Received ${imgConfig.outExt}`
        
        // Appends a timestamp to the output file name if it already exists and override is set to false
        const outputCtt: string[] = fs.readdirSync(outputFolder);
        const outputWithExt: string = `${imgConfig.outName}.${imgConfig.outExt}`;
        let output: string = imgConfig.outName;
        if (outputCtt.includes(outputWithExt) && !imgConfig.override)
            output += Date.now()

        return {
            output: output,
            ext: imgConfig.outExt,
            width: imgConfig.outWidth,
            height: imgConfig.outHeight
        }
    }

    /**
     * Main entry point of the application
     * @returns Promise resolved when the average image is created
     */
    async run() : Promise<void> {
        return new Promise(async (resolve) => {
            const imgProcesser: ImageProcesser = new ImageProcesser();
            const { width, height, ext, output } = this.getConfig();

            // Only one folder to read from -> input_images
            const folderCtt: string[] = fs.readdirSync(inputFolder);
            const imgCount: number = folderCtt.length;

            // Create empty vector
            let barycenter: Vector = new Vector([]);

            // Iterate over input images
            for (let i=0; i < imgCount; i++) {
                console.log(`Processing image... ${i+1}/${imgCount}`)
                // Read an image and rescale it
                const imgPath: string = path.join(inputFolder, folderCtt[i]);
                const originalImg: ImgData = await imgProcesser.readImgSync(imgPath);
                const resizedImg: number[] = await imgProcesser.resize(originalImg, width, height);
                // If vector has no component, set its component with resized img,
                // Else create new vector and add it to initial vector
                if (barycenter.components.length) {
                    barycenter = barycenter.add(new Vector(resizedImg));
                } else {
                    barycenter.components = resizedImg;
                }
            }
            
            // Scale vector by 1 over number of input images
            barycenter = barycenter.scale(1 / imgCount);
            // Writes average image to file system
            await imgProcesser.writeImgSync(
                barycenter.components.map(n=>Math.round(n)),
                width,
                height,
                ext,
                path.join(outputFolder, `${output}.${ext}`)
            )         

            resolve();
        })
    }
}
