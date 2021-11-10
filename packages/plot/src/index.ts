/**
 * A simple and forgiving chart plotting library for JavaScript and TypeScript.
 * 
 * @example
 * 
 * ```javascript
 * const data = [10, 30, 15, 45]; // Array of numbers.
 * plot(data)
 *      .renderImage("./myplot.png"); // Need &commat;plotex/render-image installed for this.
 * ```
 * 
 * @example
 * 
 * ```javascript
 * const htmlElement = ...; // An element in the DOM.
 * const data = [10, 30, 15, 45]; // Array of numbers.
 * plot(data)
 *      .renderDOM(htmlElement); // Need &commat;plotex/render-dom installed for this.
 * ```
 * @packageDocumentation
 */

import { IPlotAPI, PlotAPI } from "./plot-api";
import { IPlotConfig, IAxisMap } from "./chart-def";
import { determineType, isObject, isArray } from "./utils";
import { ISerializedData, IDataSeries, IAnnotation } from "@plotex/serialization";
import { serializeInput } from "./serialize";
export * from "@plotex/serialization";
export * from "@plotex/chart-def";
export { IAxisConfig, IXAxisConfig, IYAxisConfig, IPlotConfig, IYAxisSeriesConfig, IAxisMap } from "./chart-def";
export { IPlotAPI } from "./plot-api";


/**
 * A simple array of primitive values or an array of objects (with fields that have primitive values).
 */
export type ValueArray = any[];

/**
 * A single data series with optional annotations.
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
 * A single data series.
 * 
 * Can be an array of values or an {@link ISeriesSpec} object.
 */
export type SeriesSpec = ValueArray | ISeriesSpec;

/**
 * A collection of named data series.
 * 
 * Add your named data series as fields in this object.
 * 
 * @example
 * 
 * ```javascript
 * {
 *     A: [10, 30, 15, 45],
 *     B: [50, 45, 60, 65]
 * }
 * ```
 */
export interface IMultiSeriesSpec {
    /**
     * A named series of data to be input to the {@link plot} function.
     */
    [seriesName: string]: SeriesSpec;
}

/**
 * Annotations to render on the chart for each named data series.
 * 
 * @example
 * 
 * ```javascript
 * {
 *     A: [ ... annotations for series A ... ],
 *     B: [ ... annotations for series B ... ]
 * }
 * ```
 */
export interface IAnnotationSpec {
    /**
     * Annotations to render for a particular named data series.
     */
    [seriesName: string]: IAnnotation[];
}

/**
 * Specifes data to be rendered on the chart in values/annotations form.
 */
export interface IDataSpec {
    /**
     * Values or data series to render in the chart.
     */
    values:  ValueArray | IMultiSeriesSpec;

    /**
     * Annotations to be rendered on the chart.
     */
    annotations?: IAnnotation[] | IAnnotationSpec;
}

/**
 * Inputs data to the plot function.
 */
export type PlotInput = ValueArray | IMultiSeriesSpec | IDataSpec;

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
 * 
 * ```javascript
 * const data = [10, 30, 15, 45]; // Array of numbers.
 * plot(data)
 *      .renderImage("./myplot.png"); // Need &commat;plotex/render-image installed for this.
 * ```
 * 
 * @example
 * 
 * ```javascript
 * const data = [ // Array of JS objects to specify multiple data series.
 *  { A: 10, B: 50 }, 
 *  { A: 30, B: 45, }, 
 *  { A: 15, B: 60 }, 
 *  { A: 45, B: 65 }
 * ]; 
 * plot(data)
 *      .renderImage("./myplot.png"); // Need &commat;plotex/render-image installed for this.
 * ```
 * 
 * @example
 * 
 * ```javascript
 * const data = {
 *      A: [10, 30, 15, 45],
 *      B: [50, 45, 60, 65]
 * };
 * plot(data)
 *      .renderImage("./myplot.png"); // Need &commat;plotex/render-image installed for this.
 * ```
 */
export function plot(input: PlotInput, plotDef?: IPlotConfig, axisMap?: IAxisMap): IPlotAPI {
    const [serializedData, plotDefaults] = serializeInput(input);
    return new PlotAPI(serializedData, plotDef || {}, axisMap || {}, plotDefaults);
}
