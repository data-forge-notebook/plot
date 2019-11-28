import { IPlotAPI, PlotAPI } from "./plot-api";
import { IPlotConfig, IAxisMap } from "./chart-def";
import { isArray } from "util";
import { isNumber, determineType, isObject } from "./utils";
import { ISerializedData, IDataSeries } from "@plotex/serialization";
export * from "./chart-def";
export { IPlotAPI } from "./plot-api";
export { ChartType, AxisType, HorizontalLabelPosition, VerticalLabelPosition } from "@plotex/chart-def";

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
function serializeValueArray(input: any[]): ISerializedData {
    const serializedData: ISerializedData = {
        series: {
            y: {
                type: input.length > 0 
                    ? determineType(input[0])
                    : "undefined",
                values: input,
            },
        },
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
    // The data series for the column.
    //
    series: IDataSeries;
}

//
// Serialize column-based input data.
//
function serializeValueObject(input: any): ISerializedData {
    const columnNames = Object.keys(input);
    const columns = columnNames
        .filter(name => {
            const values = input[name];
            return isArray(values) && values.length > 0; // Only want arrays with > 0 elements.
        })
        .map(name => {
            const values = input[name];
            const type = determineType(values[0]);
            const column: IColumn = {
                name,
                series: {
                    type,
                    values,
                },
            };
            return column;
        });
    const serializedData: ISerializedData = {
        series: arrayToObject(columns, column => column.name, column => column.series),
    };
    return serializedData;
}

//
// Serialize an array of objects.
//
function serializeObjectArray(input: any[]): ISerializedData {
    if (input.length <=  0) {
        return { series: {} }; // No data.
    }

    const columnNames = Object.keys(input[0]);
    if (columnNames.length <= 0) {
        return { series: {} }; // No data.
    }

    const columns = columnNames
        .map(name => {
            const values = input.map(obj => obj[name]);
            const type = determineType(values[0]);
            const column: IColumn = {
                name,
                series: {
                    type,
                    values,
                },
            };
            return column;
        });
    const serializedData: ISerializedData = {
        series: arrayToObject(columns, column => column.name, column => column.series),
    };
    return serializedData;
}

//
// Serialize input data to the standard format according to its type.
//
function serializeInput(input: any[] | any): [ISerializedData, IPlotConfig] {
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
