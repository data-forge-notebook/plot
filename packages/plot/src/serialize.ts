//
// This module serializes input data to be included in a plot def.
//

import { IDataSeries, IDataSpec, IMultiSeriesSpec, IPlotConfig, ISerializedData, PlotInput, ValueArray } from ".";
import { determineType, isArray, isObject } from "./utils";

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
function serializeValueObject(columnNames: string[], input: IMultiSeriesSpec): ISerializedData {
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
// Serialize a data array.
//
function serializeArray(data: ValueArray): ISerializedData {
    if (data.length > 0 && isObject(data[0])) {
        return serializeObjectArray(data);
    }
    else {
        return serializeValueArray(data);
    }
}

//
// Serialize a data spec.
//
function serializeDataSpec(input: IDataSpec): ISerializedData {
    let serializedData = isArray(input.values) ? serializeArray(input.values) : serializeValueObject(Object.keys(input.values), input.values);
    if (input.annotations) {
        if (isArray(input.annotations)) {
            for (const seriesName of Object.keys(serializedData.series)) {
                const series = serializedData.series[seriesName];
                if (series) {
                    if (!series.annotations) {
                        series.annotations = [];
                    }
    
                    for (const annotation of input.annotations) {
                        series.annotations.push(annotation);
                    }
                }
            }
        }
        else {
            for (const annotatedSeriesName of Object.keys(input.annotations)) {
                const series = serializedData.series[annotatedSeriesName];
                if (series) {
                    if (!series.annotations) {
                        series.annotations = [];
                    }
    
                    for (const annotation of input.annotations[annotatedSeriesName]) {
                        series.annotations.push(annotation);
                    }
                }
            }
        }
    }
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
export function serializeInput(input: PlotInput): [ISerializedData, IPlotConfig] {
    const isInputArray = isArray(input);
    const isInputObject = !isInputArray && isObject(input);
    const isValueArray = isInputArray && !isObject((input as ValueArray)[0]);
    if (isValueArray) {
        return [serializeValueArray(input as ValueArray), seriesPlotDefaults];
    }
    else if (isInputObject) {
        const columnNames = Object.keys(input);
        if (columnNames.length === 1 && columnNames[0] === "values") {
            return [serializeDataSpec(input as IDataSeries), dataFramePlotDefaults];
        }
        else if (columnNames.length === 2 && columnNames[0] === "values" && columnNames[1] === "annotations") {
            return [serializeDataSpec(input as IDataSeries), dataFramePlotDefaults];
        }
        else {
            return [serializeValueObject(columnNames, input as IMultiSeriesSpec), dataFramePlotDefaults];
        }   
    }
    else {
        return [serializeObjectArray(input as ValueArray), dataFramePlotDefaults];
    }
}