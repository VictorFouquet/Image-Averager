type Config = {
    output: string;
    ext: string;
    width: number;
    height: number;
};
export declare class App {
    /**
     * Reads and parses the JSON filled in by the user
     * @returns user config for output image
     */
    getConfig(): Config;
    /**
     * Main entry point of the application
     * @returns Promise resolved when the average image is created
     */
    run(): Promise<void>;
}
export {};
