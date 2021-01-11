import "jest";
import "../index";
import { plot } from "../index";

describe("annotations", () => {

    it("can plot with annotation - form 1", ()  => {

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

    it("can plot with annotation - form 2", ()  => {

        const plotAPI = plot(
            { 
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
            {
                annotations: {
                    MyAnnotation: {
                        strokeDashArray: 3,
                    },
                },
            },
        );
        const serialized = plotAPI.serialize();

        expect(serialized.data.series.y).toEqual({
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

    it("can plot with annotation - form 3", ()  => {

        const plotAPI = plot({ 
                values: [ { a: 3 }, { a: 4 }, { a: 5 } ], 
                annotations: {
                    a: [
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

        expect(serialized.data.series.a).toEqual({
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

    it("can plot with annotation - form 4", ()  => {

        const plotAPI = plot({ 
                values: {
                    a: [3, 4, 5],
                }, 
                annotations: {
                    a: [
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

        expect(serialized.data.series.a).toEqual({
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
