import "jest";
import { applyDefaults } from "../apply-defaults";
import { ChartType } from "@plotex/chart-def";
import { ISerializedData } from "@plotex/serialization";

describe("apply defaults", () => {

    it("chart type defaults to line 1", () => {
        const inputChartDef: any = { data: {}, plotConfig: {} };
        const expanded = applyDefaults(inputChartDef);
        expect(expanded.plotConfig!.chartType!).toEqual(ChartType.Line);
    });

    it("chart type defaults to line 2", () => {
        const inputChartDef: any = { data: {}, plotConfig: {} };
        const expanded = applyDefaults(inputChartDef);
        expect(expanded.plotConfig!.chartType!).toEqual(ChartType.Line);
    });

    it("width defaults to 800", () => {
        const inputChartDef: any = { data: {}, plotConfig: {} };
        const expanded = applyDefaults(inputChartDef);
        expect(expanded.plotConfig!.width).toEqual(800);
    });

    it("height defaults to 600", () => {
        const inputChartDef: any = { data: {}, plotConfig: {} };
        const expanded = applyDefaults(inputChartDef);
        expect(expanded.plotConfig!.height).toEqual(600);
    });

    it("y axis defaults to all columns when no y axis series is specified", () => {

        const plotConfig: any = {};
        const axisMap: any = {};
        const inputChartDef: any = { data: testData, plotConfig, axisMap };
        const expanded = applyDefaults(inputChartDef);
        expect(expanded.axisMap.y).toEqual([
            {
                series: "a",
            },
            {
                series: "b",
            },
        ]);
        expect(expanded.axisMap.y2).toEqual([]);
    });

    it("can set plot defaults 1", () => {
        const inputChartDef: any = { data: {} };
        const expanded = applyDefaults(inputChartDef, { chartType: ChartType.Bubble });
        expect(expanded.plotConfig!.chartType!).toEqual(ChartType.Bubble);
    });

    it("can set plot defaults 2", () => {
        const inputChartDef: any = { data: {}, plotConfig: {} };
        const expanded = applyDefaults(inputChartDef, { chartType: ChartType.Bubble });
        expect(expanded.plotConfig!.chartType!).toEqual(ChartType.Bubble);
    });

    const testData = {
        series: {
            a: {
                type: "number",
                values: [ 10, 20, 30 ],
            },
            b: {
                type: "number",
                values: [ 100, 200, 300 ],
            },
        },
    };

    const testDataWithBadValues = {
        series: {
            a: {
                type: "number",
                values: [10, null, 20, 5 / 0, 30 ],
            },
            b: {
                type: "number",
                values: [100, undefined, 200, Math.sqrt(-2), 300 ],
            },
        },
    };

    it("y min can be passed through", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                    min: 15,
                },
            },
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.min).toBe(15);
    });

    it("y min defaults to y series min", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.min).toBe(10);
    });

    it("y min defaults to y series min with bad values", () => {

        const inputChartDef: any = {
            data: testDataWithBadValues,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.min).toBe(10);
    });

    it("y max can be passed through", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                    max: 25,
                },
            },
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.max).toBe(25);
    });

    it("y max defaults to y series max", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.max).toBe(300);
    });

    it("y max defaults to y series max with bad values", () => {

        const inputChartDef: any = {
            data: testDataWithBadValues,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.max).toBe(300);
    });

    it("y2 min can be passed through", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y2: {
                    min: 0,
                },
            },
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.min).toBe(0);
    });

    it("y2 min defaults to y2 series min", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.min).toBe(10);
    });

    it("y2 min defaults to y2 series min with bad values", () => {

        const inputChartDef: any = {
            data: testDataWithBadValues,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.min).toBe(10);
    });

    it("y2 max can be passed through", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y2: {
                    max: 400,
                },
            },
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.max).toBe(400);
    });

    it("y2 max defaults to y2 series max", () => {

        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.max).toBe(300);
    });

    it("y2 max defaults to y2 series max with bad values", () => {

        const inputChartDef: any = {
            data: testDataWithBadValues,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y2!.max).toBe(300);
    });

    it("min/max not computed for non number data", () => {

        const data = {
            series: {
                a: {
                    type: "string",
                    values: [ "10", "20", "30" ],
                },
                b: {
                    type: "string",
                    values: [ "100", "200", "300" ],
                },
            },
        };
    
        const inputChartDef: any = {
            data,
            plotConfig: {
                y: {
                },
                y2: {
                },
            },
            axisMap: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.min).toBeUndefined();
        expect(chartDef.plotConfig.y!.max).toBeUndefined();
        expect(chartDef.plotConfig.y2!.min).toBeUndefined();
        expect(chartDef.plotConfig.y2!.max).toBeUndefined();
    });    

    it("computed min and max are rounded", () => {

        const testData: ISerializedData = {
            series: {
                a: {
                    type: "number",
                    values: [ 10.123456, 20, 30.01234567 ],
                },
            }
        };
    
        const inputChartDef: any = {
            data: testData,
            plotConfig: {
                y: {
                },
                y2: {
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

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.plotConfig.y!.min).toBe(10.12);
        expect(chartDef.plotConfig.y!.max).toBe(30.02);
    });

    it("x series defaults the x axis", () => {

        const testData: ISerializedData = {
            series: {
                x: {
                    type: "number",
                    values: [ 1, 2 ],
                },
            },
        };
    
        const inputChartDef: any = {
            data: testData,
            plotConfig: {},
            axisMap: {},
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.axisMap.x!.series).toBe("x");
    });

    it("y series defaults the y axis", () => {

        const testData: ISerializedData = {
            series: {
                y: {
                    type: "number",
                    values: [ 1, 2 ],
                },
            },
        };
    
        const inputChartDef: any = {
            data: testData,
            plotConfig: {},
            axisMap: {},
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.axisMap.y[0].series).toBe("y");
    });

    it("y2 series defaults the y2 axis", () => {

        const testData: ISerializedData = {
            series: {
                y2: {
                    type: "number",
                    values: [ 1, 2 ],
                },
            },
        };
    
        const inputChartDef: any = {
            data: testData,
            plotConfig: {},
            axisMap: {},
        };

        const chartDef = applyDefaults(inputChartDef);
        expect(chartDef.axisMap.y2[0].series).toBe("y2");
    });
});
