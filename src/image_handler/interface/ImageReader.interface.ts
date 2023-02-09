export type ImgData = {
    width:  number,
    height: number,
    data:   Buffer
}

export interface _ImageReader {
    readImgSync(src: string) : Promise<ImgData>
}