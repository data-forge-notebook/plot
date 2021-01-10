import { IPlotAPI, PlotAPI } from "./plot-api";
import { IPlotConfig, IAxisMap } from "./chart-def";
import { isNumber, determineType, isObject, isArray } from "./utils";
import { ISerializedData, IDataSeries, IAnnotation } from "@plotex/serialization";
export * from "@plotex/serialization";
export * from "@plotex/chart-def";
export { IAxisConfig, IXAxisConfig, IYAxisConfig, IPlotConfig, IAxisSeriesConfig, IYAxisSeriesConfig, IAxisMap } from "./chart-def";
export { IPlotAPI } from "./plot-api";

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

/**
 * A simple array of primitive values or an array of objects (with fields that have primitive values).
 */
export type ValueArray = any[];

/**
 * Specifies input to the plot function for a single data series.
 */
export interface ISeriesSpec {
    /**
     * Array of values for the series.
     */
    values: ValueArray;

    /**
     * Annotations to the applied to the series.
     */
    annotations?: IAnnotation[];
}

/**
 * Specifies input to the plot function for a single data series.
 * Can be an array of values or an ISeriesSpec object.
 */
export type SeriesSpec = ValueArray | ISeriesSpec;

/**
 * Specifies input to the plot function.
 */
export interface IInputSpec {

    [seriesName: string]: SeriesSpec;
}

/**
 * Inputs data to the plot function.
 */
export type PlotInput = ValueArray | IInputSpec;

//
// Serialize an array of values.
//
function serializeValueArray(input: ValueArray): ISerializedData {
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
function serializeValueObject(input: IInputSpec): ISerializedData {
    const columnNames = Object.keys(input);
    const columns = columnNames
        .filter(name => {
            const values = input[name];
            if (isArray(values)) {
                return values.length > 0; // Only want arrays with > 0 elements.
            }
            else {
                return true;
            }
        })
        .map(name => {
            const seriesSpec = input[name];
            if (isArray(seriesSpec)) {
                const type = determineType(seriesSpec[0]);
                const column: IColumn = {
                    name,
                    series: {
                        type,
                        values: seriesSpec,
                    },
                };
                return column;
            }
            else {
                const type = determineType(seriesSpec.values[0]);
                const column: IColumn = {
                    name,
                    series: {
                        type,
                        values: seriesSpec.values,
                        annotations: seriesSpec.annotations,
                    },
                };
                return column;
            }
        });
    const serializedData: ISerializedData = {
        series: arrayToObject(columns, column => column.name, column => column.series),
    };
    return serializedData;
}

//
// Serialize an array of objects.
//
function serializeObjectArray(input: ValueArray): ISerializedData {
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
function serializeInput(input: PlotInput): [ISerializedData, IPlotConfig] {
    const isInputArray = isArray(input);
    const isInputObject = !isInputArray && isObject(input);
    const isValueArray = isInputArray && input.length > 0 && !isObject((input as ValueArray)[0]);
    if (isValueArray) {
        return [serializeValueArray(input as ValueArray), seriesPlotDefaults];
    }
    else if (isInputObject) {
        return [serializeValueObject(input as IInputSpec), dataFramePlotDefaults];
    }
    else {
        return [serializeObjectArray(input as ValueArray), dataFramePlotDefaults];
    }
}

/**
 * Create a plot from regular JavaScript data.
 * 
 * @param input - The data to plot. Can be an array of numbers or an array objects where the fields in the objects specify the data series.
 * @param plotDef - Optional configuration to control the plot. 
 * @param axisMap - Optional configuration that maps data series to axis'.
 * 
 * @returns A plot API object that is used to further configure the plot, serialize it or render it to an image.
 * 
 * @example
 * <pre>
 * 
 * const data = [10, 30, 15, 45]; // Array of numbers.
 * plot(data)
 *      .renderImage("./myplot.png"); // Need \@plotex/render-image installed for this.
 * </pre>
 * 
 * @example
 * <pre>
 * 
 * const data = [ // Array of JS objects to specify multiple data series.
 *  { A: 10, B: 50 }, 
 *  { A: 30, B: 45, }, 
 *  { A: 15, B: 60 }, 
 *  { A: 45, B: 65 }
 * ]; 
 * plot(data)
 *      .renderImage("./myplot.png"); // Need \@plotex/render-image installed for this.
 * </pre>
 * 
 * @example
 * <pre>
 * 
 * 
 * const data = {
 *      A: [10, 30, 15, 45],
 *      B: [50, 45, 60, 65]
 * };
 * plot(data)
 *      .renderImage("./myplot.png"); // Need \@plotex/render-image installed for this.
 * </pre>
 */
export function plot(input: PlotInput, plotDef?: IPlotConfig, axisMap?: IAxisMap): IPlotAPI {
    const [serializedData, plotDefaults] = serializeInput(input);
    return new PlotAPI(serializedData, plotDef || {}, axisMap || {}, plotDefaults);
}
