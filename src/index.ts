import { IPlotAPI, PlotAPI } from "./plot-api";
import { IPlotConfig, IAxisMap } from "./chart-def";
import { isArray } from "util";
import { isNumber, determineType } from "./utils";
import { ISerializedDataFrame } from "@data-forge/serialization";
export * from "./chart-def";
export { IPlotAPI } from "./plot-api";
export { ChartType, AxisType, HorizontalLabelPosition, VerticalLabelPosition } from "@data-forge-plot/chart-def";

const seriesPlotDefaults: IPlotConfig = {
    legend: {
        show: false,
    },
};

const dataFramePlotDefaults: IPlotConfig = {
    legend: {
        show: true,
    },
};

//
// Serialize an array of values.
//
function serializeValueArray(input: any[]): ISerializedDataFrame {
    const serializedData: ISerializedDataFrame = {
        columnOrder: [ "__value__" ],
        columns: {
            __value__: "number",
        },
        index: {
            type: "number",
            values: input.map((value: number, index: number) => index),
        },
        values: input.map((value: number) => ({ __value__: value})),
    };
    return serializedData;
} 

//
// Construct a JavaScript object from arrays of fields and values.
//
function toObject(fields: string[], values: any[]): any {
    if (fields.length !== values.length) {
        throw new Error("toObject: keys and values arrays must be the same length.");
    }
    const output: any = {};
    for (let i = 0; i < fields.length; ++i) {
        output[fields[i]] =  values[i];
    }
    return output;
}

//
// Serialize an array of objects.
//
function serializeObjectArray(input: any[]): ISerializedDataFrame {
    const columnNames = input.length > 0 ? Object.keys(input[0]) : [];
    const columnTypes = columnNames.map(columnName => determineType(input[0][columnName]));
    const serializedData: ISerializedDataFrame = {
        columnOrder: columnNames,
        columns: toObject(columnNames, columnTypes),
        index: {
            type: "number",
            values: input.map((value: number, index: number) => index),
        },
        values: input,
    };
    return serializedData;
}

/**
 * Create a plot from regular JavaScript data.
 * 
 * @param input The data to plot. Can be an array of numbers or an array objects where the fields in the objects specify the data series.
 * @param [plotDef] Optional configuration to control the plot. 
 * @param [axisMap] Optional configuration that maps data series to axis'.
 * 
 * @returns A plot API object that is used to further configure the plot, serialize it or render it to an image.
 * 
 * @example
 * <pre>
 * 
 * const data = [10, 30, 15, 45]; // Array of numbers.
 * const plot = plot(data);
 * plot.renderImage("./myplot.png"); // Need @plot/render installed for this.
 * </pre>
 * 
 * @example
 * <pre>
 * 
 * 
 * const data = [ // Array of JS objects to specify multiple data series.
 *  { A: 10, B: 50 }, 
 *  { A: 30, B: 45, }, 
 *  { A: 15, B: 60 }, 
 *  { A: 45, B: 65 }
 * ]; 
 * const plot = plot(data);
 * plot.renderImage("./myplot.png"); // Need @plot/render installed for this.
 * </pre>
 */
export function plot(input: any[] | any, plotDef?: IPlotConfig, axisMap?: IAxisMap): IPlotAPI {
    const isInputArray = isArray(input);
    const isValueArray = isInputArray && input.length > 0 && isNumber(input[0]);
    const serializedData = isValueArray ? serializeValueArray(input) : serializeObjectArray(input);
    return new PlotAPI(serializedData, plotDef || {}, axisMap || {}, isValueArray ? seriesPlotDefaults : dataFramePlotDefaults);
}
