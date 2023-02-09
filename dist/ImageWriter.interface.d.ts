export interface _ImageWriter {
    writeImgSync(data: number[], width: number, height: number, out: string): Promise<null>;
}
