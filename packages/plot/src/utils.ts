const t = require("typy").default;
import * as path from "path";

const resolve = require('resolve-cwd');

const DEFAULT_CHART_PACKAGE = "@data-forge-plot/apex";

export async function findChartTemplatePath(): Promise<string> {
    const defaultTemplatePath = resolve(`${DEFAULT_CHART_PACKAGE}/build/template/template.json`);
    const chartTemplatesPath = path.dirname(defaultTemplatePath);
    return chartTemplatesPath;
}

//
// Helper function to map an array of objects.
//
export function toMap<InT, KeyT, ValueT>(items: InT[], keySelector: (item: InT) => KeyT, valueSelector: (item: InT) => ValueT): any {
    let output: any = {};
    for (const item of items) {
        var key = keySelector(item);
        output[key] = valueSelector(item);
    }
    return output;
}

export function isObject(v: any): boolean {
    return t(v).isObject && !isDate(v);
}

export function isFunction(v: any): v is Function {
    return t(v).isFunction;
}

export function isString(v: any): v is string {
    return t(v).isString;
}

export function isDate(v: any): v is Date {
    return Object.prototype.toString.call(v) === "[object Date]";
}

export function isBoolean(v: any): v is boolean {
    return t(v).isBoolean;
}

export function isNumber(v: any): v is number {
    return t(v).isNumber;
}

export function isArray(v: any): v is Array<any> {
    return t(v).isArray;
}

export function isUndefined(v: any): boolean {
    return v === undefined;
}

//
// Determine the type of a value.
//
export function determineType(value: any): string { //TODO: This could be moved to the serialization library?
    if (value === undefined) {
        return "undefined";
    }
    else if (isNumber(value)) {
        return "number";
    }
    else if (isString(value)) {
        return "string";
    }
    else if (value instanceof Date) {
        return "date";
    }
    else if (isBoolean(value)) {
        return "boolean";
    }
    else {
        return "unsupported";
    }
}
