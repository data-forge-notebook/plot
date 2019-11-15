import "jest";
import "../index";
import { plot } from "../index";

describe("data-forge-plot - dataframe fluent", () => {

    it("can explicity set y axis", ()  => {

        const data = [{ A: 10, }, { A: 20 }, { A: 30 }];
        const plotAPI = plot(data)
            .y()
                .addSeries("A");

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

});
