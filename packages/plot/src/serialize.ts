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
export function serializeValueArray(input: ValueArray): ISerializedData {
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
// Serialize named data series from an input spec.
//
//
export function serializeValueObject(seriesNames: string[], input: IMultiSeriesSpec): ISerializedData {

    const serializedData: ISerializedData = {
        series: {            
        },
    };

    for (const seriesName of seriesNames) {
        const seriesSpec = input[seriesName];
        if (isArray(seriesSpec)) {
            if (seriesSpec.length === 0) { // Only want arrays with > 0 elements.
                continue;
            }

            if (Array.isArray(seriesSpec[0])) {
                // It's an array of arrays.
                // Expand out to multiple series.
                let i = 0;
                for (const array of seriesSpec) {
                    const generatedSeriesName = `${seriesName}.${i}`;
                    serializedData.series[generatedSeriesName] = {
                        type: determineType(array[0]),
                        values: array,
                    };
                    i += 1;
                }
            }
            else {
                serializedData.series[seriesName] = {
                    type: determineType(seriesSpec[0]),
                    values: seriesSpec,
                };
            }
        }
        else {
            serializedData.series[seriesName] = {
                type: determineType(seriesSpec.values[0]),
                values: seriesSpec.values,
                annotations: seriesSpec.annotations,
            };
        }
    }

    return serializedData;
}

//
// Serialize a data spec that has values and annotations.
//
export function serializeDataSpec(input: IDataSpec): ISerializedData {
    let serializedData = isArray(input.values) 
        ? serializeArray(input.values) 
        : serializeValueObject(Object.keys(input.values), input.values);
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
export function serializeObjectArray(input: ValueArray): ISerializedData {
    if (input.length <=  0) {
        return { series: {} }; // No data.
    }

    const seriesNames = Object.keys(input[0]);
    if (seriesNames.length <= 0) {
        return { series: {} }; // No data.
    }

    const serializedData: ISerializedData = {
        series: {            
        },
    };

    for (const seriesName of seriesNames) {
        const values = input.map(obj => obj[seriesName]);
        serializedData.series[seriesName] = {
            type: determineType(values[0]),
            values: values,
        }
    }

        return serializedData;
}

//
// Serialize a data array.
//
export function serializeArray(data: ValueArray): ISerializedData {
    if (data.length > 0 && isObject(data[0])) {
        return serializeObjectArray(data);
    }
    else {
        return serializeValueArray(data);
    }
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