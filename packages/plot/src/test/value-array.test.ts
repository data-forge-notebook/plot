import "jest";
import "../index";
import { plot } from "../index";

describe("value array", () => {

    it("plot value array with no configuration", ()  => {

        const plotAPI = plot([10, 20, 30]);
        expect(plotAPI.serialize()).toEqual({
            data: {
                series: {
                    __value__: {
                        type: "number",
                        values: [ 10, 20, 30 ],
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
                    show: false,
                },
            },
            axisMap: {
                y: [
                    {
                        series: "__value__"
                    }
                ],
                y2: []
            }
        });
    });

    it("legend is disabled by default for value array", ()  => {

        const plotAPI = plot([1, 2]);
        const serialized = plotAPI.serialize();
        expect(serialized.plotConfig.legend!.show).toEqual(false);
    });
});
