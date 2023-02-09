export interface _ImageWriter {
    writeImgSync(data: number[], width: number, height: number, ext: string, out: string) : Promise<null>
}
