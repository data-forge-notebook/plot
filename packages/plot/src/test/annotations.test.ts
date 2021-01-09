import "jest";
import "../index";
import { plot } from "../index";

describe("annotations", () => {

    it("can plot with annotation", ()  => {

        const plotAPI = plot(
            { 
                A: { 
                    values: [3, 4, 5], 
                    annotations: [
                        {
                            value: 15,
                            value2: 25,
                            text: "Yes!",
                            style: "MyAnnotation",
                        },
                    ],
                },
            },
            {
                annotations: {
                    MyAnnotation: {
                        strokeDashArray: 3,
                    },
                },
            },
        );
        const serialized = plotAPI.serialize();

        expect(serialized.data.series.A).toEqual({
            type: "number",
            values: [
                3,
                4,
                5
            ],
            annotations: [
                {
                    value: 15,
                    value2: 25,
                    text: "Yes!",
                    style: "MyAnnotation"
                }
            ]
        });

        expect(serialized.plotConfig.annotations).toEqual({
            MyAnnotation: {
                strokeDashArray: 3
            }
        });
    });

});
