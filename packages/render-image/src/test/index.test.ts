import "jest";
jest.mock("capture-template");
import { captureImage } from "capture-template";
import { PlotAPI } from "plot/build/plot-api";
import "../index";

describe("index", () => {

    it("can render image", async () => {
        const data: any = {};
        const plotConfig: any = { x: { label: { text: "Hello!" }}};
        const axisMap: any = {};
        const plot = new PlotAPI(data, plotConfig, axisMap);
        const outputPath = "./output/test";
        await plot.renderImage(outputPath);
        expect(captureImage).toHaveBeenCalled();
    });

});
