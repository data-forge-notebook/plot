import "jest";
import { IChartDef, AxisType, ChartType, ILegendConfig, IYAxisSeriesConfig } from "@plotex/chart-def";
import { formatChartDef } from "../../lib/format-chart-def";
import { ISerializedData } from "@plotex/serialization";

describe("format chart def", () => {

    const dataWithNoIndex: ISerializedData = {
        series: {
            a: {
                type: "number",
                values: [ 10, 20, 30 ],
            },
        },
    };

    const oneColumnTestData: ISerializedData = {
        series: {
            x: {
                type: "number",
                values: [ 10, 20, 30 ],
            },
            index: {
                type: "number",
                values: [ 4, 5, 6 ],
            },
        },
    };

    const twoColumnTestData: ISerializedData = {
        series: {
            a: {
                type: "number",
                values: [ 10, 20, 30 ],
            },
            b: {
                type: "number",
                values: [ 100, 200, 300 ],
            },
            index: {
                type: "number",
                values: [ 2, 3, 4 ],
            },
        },
    };

    const fourColumnTestData: ISerializedData = {
        series: {
            a: {
                type: "number",
                values: [ 10, 20 ],
            },
            b: {
                type: "number",
                values: [ 100, 200 ],
            },
            c: {
                type: "number",
                values: [ 22, 33 ],
            },
            d: {
                type: "number",
                values: [ 44, 66 ],
            },
            index: {
                type: "number",
                values: [ 2, 3 ],
            },
        },
    };

    function makeChartDef(inputChartDef?: any): IChartDef {
        const chartDef: any = {
            plotConfig: {
                chartType: inputChartDef && inputChartDef.chartType || "line",
                width: inputChartDef && inputChartDef.width,
                height: inputChartDef && inputChartDef.height,
                x: inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.x,
                y: inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.y,
                y2: inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.y2,
                legend: inputChartDef && inputChartDef.plotConfig  && inputChartDef.plotConfig.legend,
                dataLabels: inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.dataLabels,
                annotations: inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.annotations,
            },
            data: inputChartDef && inputChartDef.data || {
                columnOrder: [],
                columns: [],
                index: {},
            },
            axisMap: {
                x: inputChartDef && inputChartDef.axisMap && inputChartDef.axisMap.x,
                y: inputChartDef && inputChartDef.axisMap && inputChartDef.axisMap.y || [],
                y2: inputChartDef && inputChartDef.axisMap && inputChartDef.axisMap.y2 || [],
            },            
        };
        return chartDef;
    }

    it("throws when configuration is invalid", () => {
        const badChartDef: any = {};
        expect (() => formatChartDef(badChartDef)).toThrow();
    });

    it("can set chart type", () => {

        const apexChartDef = formatChartDef(makeChartDef({ chartType: ChartType.Bar }));
        expect(apexChartDef.chart!.type).toBe("bar");
    });

    it("width and height are passed through if supplied", () => {
        
        const width = 22;
        const height = 53;
        const apexChartDef = formatChartDef(makeChartDef({ width, height }));
        expect(apexChartDef.chart!.width).toBe(width);
        expect(apexChartDef.chart!.height).toBe(height);
    });

    it("0-based index is generated when no data series is supplied for the x axis", () => {
        const chartDef = {
            data: dataWithNoIndex,
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "a",
                data: [
                    {
                        x: 0,
                        y: 10,
                    }, 
                    {
                        x: 1,
                        y: 20, 
                    },
                    {
                        x: 2,
                        y: 30,
                    },
                ],
            },
        ]);
    });
    
    it("can plot single series with default index", () => {

        const chartDef = {
            data: oneColumnTestData,
            axisMap: {
                x: {
                    series: "index",
                },
                y: [
                    {
                        series: "x",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "x",
                data: [
                    {
                        x: 4,
                        y: 10,
                    }, 
                    {
                        x: 5,
                        y: 20, 
                    },
                    {
                        x: 6,
                        y: 30,
                    },
                ],
            },
        ]);
    });

    it("can plot multiple series with default index", () => {

        const chartDef = {
            data: twoColumnTestData,
            axisMap: {
                x: {
                    series: "index",
                },
                y: [
                    {
                        series: "a",
                    },
                    {
                        series: "b",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "a",
                data: [
                    {
                        x: 2,
                        y: 10,
                    }, 
                    {
                        x: 3,
                        y: 20, 
                    },
                    {
                        x: 4,
                        y: 30,
                    },
                ],
            },
            {
                name: "b",
                data: [
                    {
                        x: 2,
                        y: 100,
                    }, 
                    {
                        x: 3,
                        y: 200, 
                    },
                    {   
                        x: 4,
                        y: 300,
                    },
                ],
            },
        ]);
    });
    
    it("can pluck named series for y axis", () => {

        const chartDef = {
            data: twoColumnTestData,
            axisMap: {
                x: {
                    series: "index",
                },
                y: [
                    {
                        series: "b",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
                {
                name: "b",
                data: [
                    {
                        x: 2,
                        y: 100,
                    }, 
                    {
                        x: 3,
                        y: 200, 
                    },
                    {   
                        x: 4,
                        y: 300,
                    },
                ],
            },
        ]);
    });

    it("can pluck named series for x axis", ()  => {

        const chartDef = {
            data: twoColumnTestData,
            axisMap: {
                x: {
                    series: "a",
                },
                y: [
                    {
                        series: "b",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "b",
                data: [
                    {
                        x: 10,
                        y: 100,
                    }, 
                    {
                        x: 20,
                        y: 200, 
                    },
                    {   
                        x: 30,
                        y: 300,
                    },
                ],
            },
        ]);
    });

    it("can pluck named series for second y axis", ()  => {

        const chartDef = {
            data: twoColumnTestData,
            axisMap: {
                x: {
                    series: "index",
                },  
                y: [
                    {
                        series: "a",
                    },
                ],
                y2: [
                    {
                        series: "b",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "a",
                data: [
                    {
                        x: 2,
                        y: 10,
                    }, 
                    {
                        x: 3,
                        y: 20, 
                    },
                    {   
                        x: 4,
                        y: 30,
                    },
                ],
            },
            {
                name: "b",
                data: [
                    {
                        x: 2,
                        y: 100,
                    }, 
                    {
                        x: 3,
                        y: 200, 
                    },
                    {   
                        x: 4,
                        y: 300,
                    },
                ],
            },
        ]);
    });

    it("can pluck multiple named series for second y axis", ()  => {

        const chartDef = {
            data: twoColumnTestData,
            axisMap: {
                x: {
                    series: "index",
                },
                y2: [
                    {
                        series: "a",
                    },
                    {
                        series: "b",
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "a",
                data: [
                    {
                        x: 2,
                        y: 10,
                    }, 
                    {
                        x: 3,
                        y: 20, 
                    },
                    {   
                        x: 4,
                        y: 30,
                    },
                ],
            },
            {
                name: "b",
                data: [
                    {
                        x: 2,
                        y: 100,
                    }, 
                    {
                        x: 3,
                        y: 200, 
                    },
                    {   
                        x: 4,
                        y: 300,
                    },
                ],
            },
        ]);
    });

    it("can set x axis per y axis", ()  => {

        const chartDef = {
            data: fourColumnTestData,
            axisMap: {
                y: [
                    {
                        series: "a",
                        x: {
                            series: "c",
                        },
                    },
                    {
                        series: "b",
                        x: {
                            series: "d",
                        },
                    },
                ],
            },
        };

        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.series).toEqual([
            {
                name: "a",
                data: [
                    {
                        x: 22,
                        y: 10,
                    }, 
                    {
                        x: 33,
                        y: 20, 
                    },
                ],
            },
            {
                name: "b",
                data: [
                    {
                        x: 44,
                        y: 100,
                    }, 
                    {
                        x: 66,
                        y: 200, 
                    },
                ],
            },
        ]);
    });

    it("second y axis is on opposite side", ()  => {

        const chartDef = {
            data: oneColumnTestData,
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
                y2: [
                    {
                        series: "b",
                    },
                ],
            },
        };

        const yaxis = formatChartDef(makeChartDef(chartDef)).yaxis as ApexYAxis[];
        expect(yaxis.length).toEqual(2);
        expect(yaxis[0].opposite).toEqual(false);
        expect(yaxis[1].opposite).toEqual(true);
    });

    it("subsequent y axis are not shown", ()  => {

        const chartDef = {
            data: fourColumnTestData,
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                    {
                        series: "b",
                    },
                    {
                        series: "c",
                    },
                ],
            },
        };

        const yaxis = formatChartDef(makeChartDef(chartDef)).yaxis as ApexYAxis[];
        expect(yaxis.length).toEqual(3);
        expect(yaxis[0].show).toEqual(true);
        expect(yaxis[1].show).toEqual(false);
        expect(yaxis[2].show).toEqual(false);
    });

    it("subsequent y2 axis are not shown", ()  => {

        const chartDef = {
            data: fourColumnTestData,
            axisMap: {
                y2: [
                    {
                        series: "a",
                    },
                    {
                        series: "b",
                    },
                    {
                        series: "c",
                    },
                ],
            },
        };

        const yaxis = formatChartDef(makeChartDef(chartDef)).yaxis as ApexYAxis[];
        expect(yaxis.length).toEqual(3);
        expect(yaxis[0].show).toEqual(true);
        expect(yaxis[1].show).toEqual(false);
        expect(yaxis[2].show).toEqual(false);
    });

    it("can set min and max values for both y axises", ()  => {

        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y: {
                    min: 15,
                    max: 25,
                },
                y2: {
                    min: 0,
                    max: 400,
                },
            },
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
                y2: [
                    {
                        series: "b",
                    },
                ],
            },
        };

        const yaxis = formatChartDef(makeChartDef(chartDef)).yaxis as ApexYAxis[];
        expect(yaxis.length).toEqual(2);
        expect(yaxis[0].min).toEqual(15);
        expect(yaxis[0].max).toEqual(25);
        expect(yaxis[1].min).toEqual(0);
        expect(yaxis[1].max).toEqual(400);
    });

    it("stroke width defaults to 1", () => {
        
        const apexChartDef = formatChartDef(makeChartDef());
        expect(apexChartDef.stroke!.width).toBe(1);
    });

    it("using a datetime index for the x axis sets the apex datatype to datetime", () => {

        const data = {
            series: {
                A: {
                    type: "date",
                    values: [
                        new Date("2018/01/01"), 
                        new Date("2018/01/02"),
                    ],
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef({ data, axisMap: { x: { series: "A" } } }));
        expect(apexChartDef.xaxis!.type).toBe("datetime");
    });

    it("using a default series for xaxis default to datatype of numeric", () => {

        const data: ISerializedData = {
            series: {                
            },
        };
        const apexChartDef = formatChartDef(makeChartDef({ data }));
        expect(apexChartDef.xaxis!.type).toBe("numeric");
    });

    it("using a strings index for the x axis sets the apex datatype to category", () => {

        const data = {
            series: {
                A: {
                    type: "string",
                    values: [ "a", "b" ],
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef({ data, axisMap: { x: { series: "A" } } }));
        expect(apexChartDef.xaxis!.type).toBe("category");
    });

    it("using a datetime column for the x axis sets the apex datatype to datetime", () => {

        const data = {
            series: {
                A: {
                    type: "date",
                    values: [
                        new Date("2018/01/01"),
                        new Date("2018/01/02"),
                    ],
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef({ data, axisMap: { x: { series: "A" }} }));
        expect(apexChartDef.xaxis!.type).toBe("datetime");
    });

    it("using a numeric column for the x axis sets the apex datatype to numeric", () => {

        const data = {
            series: {
                A: {
                    type: "number",
                    values: [ 10, 20 ],
                },
            }
        };
        const apexChartDef = formatChartDef(makeChartDef({ data, axisMap: { x: { series: "A" }} }));
        expect(apexChartDef.xaxis!.type).toBe("numeric");
    });

    it("using a strings column for the x axis sets the apex datatype to category", () => {

        const data = {
            series: {
                A: {
                    type: "string",
                    values: [ "a", "b" ],
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef({ data, axisMap: { x: { series: "A" }} }));
        expect(apexChartDef.xaxis!.type).toBe("category");
    });

    it("data labels are disabled", () => {
        const apexChartDef = formatChartDef(makeChartDef());
        expect(apexChartDef.dataLabels!.enabled).toBe(false);
    });

    it("legend defaults to true", () => {
        expect(formatChartDef(makeChartDef()).legend!.show).toBe(true);
        expect(formatChartDef(makeChartDef({ legend: {  } })).legend!.show).toBe(true);
    });

    it("can show legend", () => {
        const apexChartDef = formatChartDef(makeChartDef({ plotConfig: { legend: { show: true }}}));
        expect(apexChartDef.legend!.show).toBe(true);
    });

    it("can hide legend", () => {
        const apexChartDef = formatChartDef(makeChartDef({ plotConfig: { legend: { show: false }}}));
        expect(apexChartDef.legend!.show).toBe(false);
    });

    it("can set font style for legend", () => {
        const chartDef = {
            plotConfig: {
                legend: {
                    font: {
                        size: "10px",
                        family: "Arial",
                    },
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.legend!.fontSize).toBe("10px");
        expect(apexChartDef.legend!.fontFamily).toBe("Arial");
    });

    it("can set label for xaxis", () => {
        const chartDef = {
            plotConfig: {
                x: {
                    label: {
                        text: "A great label",                       
                    },
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.xaxis!.title!.text).toBe("A great label");
    });

    it("can set font style for xaxis label", () => {
        const chartDef = {
            plotConfig: {
                x: {
                    label: {
                        font: {
                            size: "10px",
                            family: "Arial",
                        },
                    },
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style: any = apexChartDef.xaxis!.title!.style!; //TODO: Typecast to any due to out of date types in ApexCharts.
        expect(style.fontSize).toBe("10px");
        expect(style.fontFamily).toBe("Arial");
    });

    it("can set font style for xaxis ticks", () => {
        const chartDef = {
            plotConfig: {
                x: {
                    ticks: {
                        font: {
                            size: "10px",
                            family: "Arial",
                        },
                    },
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style = apexChartDef.xaxis!.labels!.style!;
        expect(style.fontSize).toBe("10px");
        expect(style.fontFamily).toBe("Arial");
    });

    it("can set label for first yaxis", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y: {
                    label: {
                        text: "A great label",                       
                    },
                },
            },
            axisMap: {
                y: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect((apexChartDef.yaxis as ApexYAxis[])[0].title!.text).toBe("A great label");
    });

    it("can set font style for first yaxis label", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y: {
                    label: {
                        font: {
                            size: "12px",
                            family: "Courier New",
                        },
                    },
                },
            },
            axisMap: {
                y: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style = (apexChartDef.yaxis as ApexYAxis[])[0].title!.style!;
        expect(style.fontSize).toBe("12px");
        expect(style.fontFamily).toBe("Courier New");
    });

    it("can set font style for first yaxis ticks", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y: {
                    ticks: {
                        font: {
                            size: "12px",
                            family: "Courier New",
                        },
                    },
                },
            },
            axisMap: {
                y: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style = (apexChartDef.yaxis as ApexYAxis[])[0].labels!.style!;
        expect(style.fontSize).toBe("12px");
        expect(style.fontFamily).toBe("Courier New");
    });

    it("can set label for 2nd yaxis", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y2: {
                    label: {
                        text: "A great label",                       
                    },
                },
            },
            axisMap: {
                y2: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect((apexChartDef.yaxis as ApexYAxis[])[0].title!.text).toBe("A great label");
    });

    it("can set font style for 2nd yaxis label", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y2: {
                    label: {
                        font: {
                            size: "13px",
                            family: "Times New Roman",
                        },
                    },
                },
            },
            axisMap: {
                y2: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style = (apexChartDef.yaxis as ApexYAxis[])[0].title!.style!;
        expect(style.fontSize).toBe("13px");
        expect(style.fontFamily).toBe("Times New Roman");
    });

    it("can set font style for 2nd yaxis ticks", () => {
        const chartDef = {
            data: oneColumnTestData,
            plotConfig: {
                y2: {
                    ticks: {
                        font: {
                            size: "13px",
                            family: "Times New Roman",
                        },
                    },
                },
            },
            axisMap: {
                y2: [
                    {
                        series: "x",
                    },
                ],
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        const style = (apexChartDef.yaxis as ApexYAxis[])[0].labels!.style!;
        expect(style.fontSize).toBe("13px");
        expect(style.fontFamily).toBe("Times New Roman");
    });

    it("can configure font style for data labels", () => {
        const chartDef = {
            plotConfig: {
                dataLabels: {
                    font: {
                        size: "22px",
                        family: "The best font",
                    },
                },
            },
        };
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.dataLabels!.enabled).toBe(true);
        const style = apexChartDef.dataLabels!.style!;
        expect(style.fontSize).toBe("22px");
        expect(style.fontFamily).toBe("The best font");
    });

    it("can place annotation on x axis", () => {
        const chartDef = {
            data: {
                series: {
                    a: {
                        type: "number",
                        values: [ 10, 20, 30 ],
                        annotations: [
                            {
                                value: 10,
                                value2: 20,
                                text: "An annotation"
                            }
                        ]
                    },
                },
            },
            plotConfig: {
            },
            axisMap: {
                x: {
                    series: "a",
                },
            },
        };
        
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.annotations!.xaxis!.length).toBe(1);

        const apexAnnotation = apexChartDef.annotations!.xaxis![0];
        expect(apexAnnotation.label!.text).toBe("An annotation");
        expect(apexAnnotation.x).toBe(10);
        expect(apexAnnotation.x2).toBe(20);
        expect((apexAnnotation as any).yAxisIndex).toBe(undefined);
    });

    it("can place annotation on y axis", () => {
        const chartDef = {
            data: {
                series: {
                    a: {
                        type: "number",
                        values: [ 10, 20, 30 ],
                        annotations: [
                            {
                                value: 10,
                                value2: 20,
                                text: "An annotation"
                            }
                        ]
                    },
                },
            },
            plotConfig: {
            },
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
            },
        };
        
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.annotations!.yaxis!.length).toBe(1);

        const apexAnnotation = apexChartDef.annotations!.yaxis![0];
        expect(apexAnnotation.label!.text).toBe("An annotation");
        expect(apexAnnotation.y).toBe(10);
        expect(apexAnnotation.y2).toBe(20);
        expect(apexAnnotation.yAxisIndex).toBe(0);
    });

    it("can place annotation on y2 axis", () => {
        const chartDef = {
            data: {
                series: {
                    a: {
                        type: "number",
                        values: [ 10, 20, 30 ],
                        annotations: [
                            {
                                value: 10,
                                value2: 20,
                                text: "An annotation"
                            }
                        ]
                    },
                },
            },
            plotConfig: {
            },
            axisMap: {
                y2: [
                    {
                        series: "a",
                    },
                ],
            },
        };
        
        const apexChartDef = formatChartDef(makeChartDef(chartDef));
        expect(apexChartDef.annotations!.yaxis!.length).toBe(1);

        const apexAnnotation = apexChartDef.annotations!.yaxis![0];
        expect(apexAnnotation.label!.text).toBe("An annotation");
        expect(apexAnnotation.y).toBe(10);
        expect(apexAnnotation.y2).toBe(20);
        expect(apexAnnotation.yAxisIndex).toBe(1);
    });

    it("can style annotation", () => {
        const chartDef = {
            data: {
                series: {
                    a: {
                        type: "number",
                        values: [ 10, 20, 30 ],
                        annotations: [
                            {
                                value: 10,
                                style: "someStyle"
                            }
                        ]
                    },
                },
            },
            plotConfig: {
                annotations: {
                    someStyle: {
                        strokeDashArray: 2,
                        lineColor: "#f00",
                        fillColor: "yellow",
                        opacity: 0.8,
                        offsetX: 1,
                        offsetY: 2,
                        lineLength: "600px",
                        label: {
                            text: "A great annotation",
                            backgroundColor: "blue",
                            borderColor: "green",
                            borderWidth: 5,
                            borderRadius: 0,
                            textAnchor: "end",
                            position: "bottom",
                            orientation: "horizontal",
                            offsetX: 3,
                            offsetY: 4,
                            font: {
                                color: "white",
                                size: "5px",
                                family: "Comic Sans",
                                weight: 300,
                            },
                            padding: {
                                left: 1,
                                right: 2,
                                top: 3,
                                bottom: 4,
                            },
                        },
                    },
                },
            },
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
            },
        };
        
        const apexChartDef = formatChartDef(makeChartDef(chartDef));

        expect(apexChartDef.annotations!.yaxis!.length).toBe(1);

        const apexAnnotation = apexChartDef.annotations!.yaxis![0];
        expect(apexAnnotation.strokeDashArray).toBe(2);
        expect(apexAnnotation.borderColor).toBe("#f00");
        expect(apexAnnotation.fillColor).toBe("yellow");
        expect(apexAnnotation.opacity).toBe(0.8);
        expect(apexAnnotation.offsetX).toBe(1);
        expect(apexAnnotation.offsetY).toBe(2);
        expect(apexAnnotation.width).toBe("600px");
        expect(apexAnnotation.label!.borderColor).toBe("green");
        expect(apexAnnotation.label!.borderWidth).toBe(5);
        expect(apexAnnotation.label!.borderRadius).toBe(0);
        expect(apexAnnotation.label!.text).toBe("A great annotation");
        expect(apexAnnotation.label!.textAnchor).toBe("end");
        expect(apexAnnotation.label!.position).toBe("bottom");
        expect(apexAnnotation.label!.offsetX).toBe(3);
        expect(apexAnnotation.label!.offsetY).toBe(4);
        expect(apexAnnotation.label!.style!.background).toBe("blue");
        expect(apexAnnotation.label!.style!.color).toBe("white");
        expect(apexAnnotation.label!.style!.fontSize).toBe("5px");
        expect(apexAnnotation.label!.style!.fontWeight).toBe(300);
        expect(apexAnnotation.label!.style!.fontFamily).toBe("Comic Sans");

        expect(apexAnnotation.label!.style!.padding).toEqual({
            left: 1,
            right: 2,
            top: 3,
            bottom: 4,
        });
    });

    it("can set default annotation style", () => {
        const chartDef = {
            data: {
                series: {
                    a: {
                        type: "number",
                        values: [ 10, 20, 30 ],
                        annotations: [
                            {
                                value: 10,
                            }
                        ]
                    },
                },
            },
            plotConfig: {
                annotations: {
                    default: {
                        strokeDashArray: 12,
                    }
                },
            },
            axisMap: {
                y: [
                    {
                        series: "a",
                    },
                ],
            },
        };
        
        const apexChartDef = formatChartDef(makeChartDef(chartDef));

        expect(apexChartDef.annotations!.yaxis!.length).toBe(1);

        const apexAnnotation = apexChartDef.annotations!.yaxis![0];
        expect(apexAnnotation.strokeDashArray).toBe(12);
    });    

});
