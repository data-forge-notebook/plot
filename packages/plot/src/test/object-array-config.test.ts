import "jest";
import "../index";
import { plot } from "../index";

describe("data-forge-plot - dataframe configuration", () => {

    it("plot object array with no configuration", ()  => {

        const data = [{ A: 10 }, { A: 20 }, { A: 30 }];
        const plotAPI = plot(data);
        expect(plotAPI.serialize()).toEqual({
            data: {
                series: {
                    A: {
                        type: "number",
                        values: [10, 20, 30],
                    },
                },
            },
            plotConfig: {
                chartType: "line",
                width: 800,
                height: 600,
                y: {
                    min: 10,
                    max: 30,
                },
                y2: {
                },
                legend: {
                    show: true,
                },
            },
            axisMap: {
                y: [
                    {
                        series: "A",
                    },
                ],
                y2: [],
            },
        });
    });

    it.only("plot object with no configuration", ()  => {

        const data = { A: [10, 20, 30], B: [1, 2, 3] };
        const plotAPI = plot(data);
        expect(plotAPI.serialize()).toEqual({
            data: {
                series: {
                    A: {
                        type: "number",
                        values: [10, 20, 30],
                    },
                    B: {
                        type: "number",
                        values: [1, 2, 3],
                    },
                },
            },
            plotConfig: {
                chartType: "line",
                width: 800,
                height: 600,
                y: {
                    min: 1,
                    max: 30,
                },
                y2: {
                },
                legend: {
                    show: true,
                },
            },
            axisMap: {
                y: [
                    {
                        series: "A",
                    },
                    {
                        series: "B",
                    },
                ],
                y2: [],
            },
        });
    });

    it("legend is enabled by default for empty array", ()  => {

        const plotAPI = plot([]);
        const serialized = plotAPI.serialize();
        expect(serialized.plotConfig.legend!.show).toEqual(true);
    });

    it("legend is enabled by default for array of objects", ()  => {

        const plotAPI = plot([{ A: 1 }]);
        const serialized = plotAPI.serialize();
        expect(serialized.plotConfig.legend!.show).toEqual(true);
    });
});
