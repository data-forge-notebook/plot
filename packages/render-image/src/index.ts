import { IPlotAPI, AbstractPlotAPI } from "plot/build/plot-api";
import { captureImage, ICaptureOptions } from "capture-template";
import * as path from "path";
const opn = require("opn");

/**
 * Options for image rendering.
 */
export interface IRenderOptions {
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

//
// Augment IPlotAPI and PlotAPI with renderImage function.
//
declare module "plot/build/plot-api" {

    interface IPlotAPI {

        /**
         * Render the plot to an image file.
         */
        renderImage(imageFilePath: string, renderOptions?: IRenderOptions): Promise<void>;
    }

    interface AbstractPlotAPI {

        /**
         * Render the plot to an image file.
         */
        renderImage(imageFilePath: string, renderOptions?: IRenderOptions): Promise<void>;
    }
}

/**
 * Render the plot to an image file.
 */
export async function renderImage(this: IPlotAPI, imageFilePath: string, renderOptions?: IRenderOptions): Promise<void> {

    const chartDef = this.serialize();
    if (renderOptions && renderOptions.showChartDef) {
        console.log("Expanded chart definition:");
        console.log(JSON.stringify(chartDef, null, 4));
    }
    
    const templatePath = path.join(__dirname, "template");
    const captureOptions: ICaptureOptions = {
        nightmarePath: renderOptions && renderOptions.nightmarePath,
        electronPath: renderOptions && renderOptions.electronPath,
        inflateOptions: {
            inMemoryFiles: [
                {
                    file: "chart-def.json",
                    content: JSON.stringify(
                        { 
                            chartDef, 
                            options: {
                                makeStatic: true,
                                showChartDef: renderOptions && renderOptions.showChartDef || false,
                            },
                        }, 
                        null, 
                        4
                    ),
                },
            ],
        },
    };
    
    await captureImage(templatePath, { chartDef }, imageFilePath, captureOptions);
    
    if (renderOptions && renderOptions.openImage) {
        opn(path.resolve(imageFilePath));
    }
}

AbstractPlotAPI.prototype.renderImage = renderImage;