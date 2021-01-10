import { IPlotAPI } from 'plot/build/plot-api';

/**
 * Options for image rendering.
 */
export declare interface IRenderOptions {
    /**
     * Open the image in your default image viewer.
     */
    openImage?: boolean;
    /**
     * Path to Nighmare so that a separate external version of Nightmare can be used if necessary.
     */
    nightmarePath?: string;
    /**
     * Path to electron, so that electron can be installed separately to a different location and shared
     * between the various packages that need it.
     *
     * Electron is used to render charts and capture them to images.
     */
    electronPath?: string;
    /**
     * Set to true to show the chart definition after expansion and also after formatting.
     */
    showChartDef?: boolean;
}

/**
 * Render the plot to an image file.
 */
export declare function renderImage(this: IPlotAPI, imageFilePath: string, renderOptions?: IRenderOptions): Promise<void>;

export { }
