import { IPlotAPI, PlotAPI } from "./plot-api";
import { IPlotConfig, IAxisMap } from "./chart-def";
import { isArray } from "util";
import { isNumber, determineType, isObject } from "./utils";
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
// Create an object from array.
//
function arrayToObject(arr: any[], keySelector: (item: any) => any, valueSelector: (item: any) => any): any {
    return toObject(arr.map(keySelector), arr.map(valueSelector));
}

//
// Defines a column in a set of column-based data arrays.
//
interface IColumn {
    //
    // Name of the column.
    //
    name: string;
    
    // 
    // Data type of the column.
    //
    type: string | undefined;

    //
    // Array of data values for the column.
    //
    data: any[];
}

//
// Zip up column-based arrays of data into a single array.
//
function zipArrays(columnDetails: IColumn[]): any[] {
    const maxLength = Math.max(...columnDetails.map(({ data }) => data.length));
    const zipped: any[] = [];
    for (let i = 0; i < maxLength; ++i) {
        const output: any = {};
        for (const {name, data} of columnDetails) {
            output[name] = data[i];
        }
        zipped.push(output);
    }
    return zipped;
}

//
// Serialize column-based input data.
//
function serializeValueObject(input: any): ISerializedDataFrame {
    const columnNames = Object.keys(input);
    const columns = columnNames
        .map(name => {
            const data = input[name];
            let type: string | undefined = undefined;
            if (isArray(data) && data.length > 0) {
                type = determineType(data[0]);
            }

            const column: IColumn = {
                name,
                type,
                data,
            };
    
            return column;
        })
        .filter(({ type }) => type);
    const values = zipArrays(columns);
    const serializedData: ISerializedDataFrame = {
        columnOrder: columnNames,
        columns: arrayToObject(columns, ({ name }) => name, ({ type }) => type),
        index: {
            type: "number",
            values: values.map((_, index) => index),
        },
        values,
    };
    return serializedData;
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
            values: input.map((_, index) => index),
        },
        values: input,
    };
    return serializedData;
}

//
// Serialize input data to the standard format according to its type.
//
function serializeInput(input: any[] | any): [ISerializedDataFrame, IPlotConfig] {
    const isInputArray = isArray(input);
    const isInputObject = !isInputArray && isObject(input);
    const isValueArray = isInputArray && input.length > 0 && isNumber(input[0]);
    if (isValueArray) {
        return [serializeValueArray(input), seriesPlotDefaults];
    }
    else if (isInputObject) {
        return [serializeValueObject(input), dataFramePlotDefaults];
    }
    else {
        return [serializeObjectArray(input), dataFramePlotDefaults];
    }
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
    const [serializedData, plotDefaults] = serializeInput(input);
    return new PlotAPI(serializedData, plotDef || {}, axisMap || {}, plotDefaults);
}
