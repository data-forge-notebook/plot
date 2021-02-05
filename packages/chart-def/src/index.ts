/**
 * This package contains core types that define the chart definition.
 *
 * @packageDocumentation
 */

import { ISerializedData } from "@plotex/serialization";

/**
 * Sets the type of chart to output.
 */
export enum ChartType {
    Line = "line",
    Bar = "bar",
    Scatter = "scatter",
    Area = "area",
    Histograph = "histogram",
    Pie = "pie",
    Donut = "donut",
    RadialBar = "radialBar",
    Bubble = "bubble",
    Heatmap = "heatmap",
    Candlestick = "candlestick",
    Radar = "radar",
}

/**
 * Sets the type of chart to output.
 */
export type ChartTypeString = "line" | "bar" | "scatter" | "area" | "histogram" | "pie" | "donut" | "radialBar" | "bubble" | "heatmap" | "candlestick" | "radar";

/**
 * Sets the type of an axis.
 */
export enum AxisType {
    Numerical = "numerical",
    Timeseries = "timeseries",
    Category = "category",
}

/**
 * Sets the type of an axis.
 */
export type AxisTypeString = "numerical" | "timeseries" | "category";

/**
 * Sets the position of a horizontal label.
 */
export enum HorizontalLabelPosition {
    InnerRight = "inner-right", // Default
    InnerCenter = "inner-center",
    InnerLeft = "inner-left",
    OuterRight = "outer-right",
    OuterCenter = "outer-center",
    OuterLeft = "outer-left",
}

/**
 * Sets the position of a horizontal label.
 */
export type HorizontalLabelPositionString = "inner-right" | "inner-center" | "inner-left" | "outer-right" | "outer-center" | "outer-left";

/**
 * Sets the position of a vertical label.
 */
export enum VerticalLabelPosition {
    InnerTop = "inner-top", // Default
    InnerMiddle = "inner-middle",
    InnerBottom = "inner-bottom",
    OuterTop = "outer-top",
    OuterMiddle = "outer-middle",
    OuterBottom = "outer-bottom",
}

/**
 * Sets the position of a vertical label.
 */
export type VerticalLabelPositionString = "inner-top" | "inner-middle" | "inner-bottom" | "outer-top" | "outer-middle" | "outer-bottom";

/**
 * Configures the font for a label.
 */
export interface IFontConfig {
    /**
     * Font size for the label.
     */
    size?: string;

    /**
     * Font family for the label.
     */
    family?: string;

    /**
     * Font weight for the label.
     */
    weight?: string | number;

    /**
     * Color of the font.
     */
    color?: string;
}

/**
 * Configures the label for a series.
 */
export interface ISeriesLabelConfig {

    /**
     * The text for the label.
     */
    text?: string;

    /**
     * Configures the font for the label.
     */
    font?: IFontConfig;
}

/**
 * Configure labels that are applied to each data point.
 */
export interface IDataLabels {
    /**
     * Configure the font for data labels.
     */
    font?: IFontConfig;
}

/**
 * Relates a single axis to data series.
 */
export interface IAxisSeriesConfig {

    /**
     * The name of the series to render on the axis.
     */
    series: string;

    /**
     * The label for the series on this axis.
     */
    label?: string;

    /**
     * The format for rendering values of the series.
     */
    format?: string;

    /**
     * The color to render to assign to the series.
     */
    color?: string;
}

/**
 * Relates a single Y axis to data series.
 */
export interface IYAxisSeriesConfig extends IAxisSeriesConfig {

    /**
     * Configure a separate X axis for the y axis.
     */
    x?: IAxisSeriesConfig;
}

/**
 * Defines the configuration of an axis label.
 */
export interface IAxisLabelConfig {

    /**
     * The text for the label.
     */
    text?: string;

    /**
     * Position of the label.
     */
    position?: HorizontalLabelPosition | HorizontalLabelPositionString | VerticalLabelPosition | VerticalLabelPositionString;

    /**
     * Configures the font for the label.
     */
    font?: IFontConfig;
}

/**
 * Configuration for axis tick marks.
 */
export interface IAxisTicksConfiguration {
    /**
     * Configures the font for tick marks..
     */
    font?: IFontConfig;
}

/**
 * Configures an axis of the chart.
 */
export interface IAxisConfig {

    /**
     * Title for the axis.
     */
    label?: IAxisLabelConfig;

    /**
     * Configuration for axis tick marks.
     */
    ticks?: IAxisTicksConfiguration;

    /**
     * The format for rendering values on the axis.
     */
    format?: string; //TODO: This doesn't exist in the DFP version of the chart def.
}

/**
 * Configures the X axis of the chart.
 */
export interface IXAxisConfig extends IAxisConfig {

    /**
     * Sets the type of the axis' data.
     */
    axisType?: AxisType | AxisTypeString;
}

/**
 * Configures a Y axis of the chart.
 */
export interface IYAxisConfig extends IAxisConfig {

    /**
     * The minimum value to render on the axis.
     */
    min?: number;

    /**
     * The maximum value to render on the axis.
     */
    max?: number;
}

/**
 * Configures the legend of the chart.
 */
export interface ILegendConfig {

    /**
     * Set to true (default) to show the legend for the chart   .
     */
    show: boolean;

    /**
     * Configure the font in the legend.
     */
    font?: IFontConfig;
}

/**
 * Sets padding.
 */
export interface IPadding {
    /**
     * Left padding.
     */
    left?: number;

    /**
     * Right padding.
     */
    right?: number;

    /**
     * Top padding.
     */
    top?: number;

    /**
     * Bottom padding.
     */
    bottom?: number;
}

/**
 * Sets the style for the annotation's label.
 */
export interface IAnnotationLabelStyle {

    /**
     * Default text for the annotation.
     */
    text?: string;

    /**
     * Background color for the annotation label.
     */
    backgroundColor?: string;

    /**
     * Border Color of the label.
     */
    borderColor?: string;

    /**
     * Border width of the label.
     */
    borderWidth?: number;

    /**
     * Border-radius of the label.
     */
    borderRadius?: number;

    /**
     * The alignment of text relative to label’s drawing position
     */
    textAnchor?: "start" | "middle" | "end";

    /**
     * Position of the lablel.
     */
    position?: "left" | "right" | "top" | "bottom";

    /**
     * Orientation of the label.
     * Only affects annotations on the X axis.
     */
    orientation?: "vertical" | "horizontal";

    /**
     * Sets the left offset for annotation label.
     */
    offsetX?: number;

    /**
     * Sets the top offset for annotation label.
     */
    offsetY?: number;

    /**
     * Font for the annotation label.
     */
    font?: IFontConfig;

    /**
     * Padding for the annotation label.
     */
    padding?: IPadding;
}

/**
 * A style that can be applied to an annotation.
 */
export interface IAnnotationStyle {
    /**
     * Creates dashes in borders of the SVG path. A higher number creates more space between dashes in the border.
     */
    strokeDashArray?: number;

    /**
     * Color of the annotation line.
     */
    lineColor?: string;

    /**
     * Fill Color of the region when the second value is supplied for an annotation.
     */
    fillColor?: string;

    /**
     * Opacity of the filled region.
     */
    opacity?: number;

    /**
     * Sets the left offset for annotation line.
     */
    offsetX?: number;

    /**
     * Sets the top offset for annotation line.
     */
    offsetY?: number;

    /**
     * Sets the length for aN annotation line on the Y axis.
     * Doesn't apply to the X axis.
     */
    lineLength?: string | number;

    /**
     * Sets the style for the annotation's label.
     */
    label?: IAnnotationLabelStyle;
}

/**
 * Named styles that can be applied to annotations.
 */
export interface IAnnotationStyles {
    [styleName: string]: IAnnotationStyle;
}

/**
 * Configuration for a data series.
 */
export interface ISeriesConfig {
    /**
     * The type of chart to render for a particular named data series.
     * Defaults to global chart type or, if no global chart defaults to a line chart.
     */
    chartType?: ChartType | ChartTypeString;
}

/**
 * Lookup table for configuration of named data series.
 * Add an enty for each series you want to configure.
 * 
 * @example
 * 
 * ```javascript
 * {
 *      seriesConfig: {
 *          aDataSeries: {
 *              chartType: "bar"
 *          }
 *      }
 * }
 * ```
 */
export interface ISeriesConfigMap {
    /**
     * Configuration for a named data series.
     */
    [seriesName: string]: ISeriesConfig;
}

/**
 * Defines the chart.
 */
export interface IPlotConfig {

    /**
     * The type of chart to render.
     * This is the global type of the chart, you can also set the chart type individually for each data series, @see ISeriesConfig.
     */
    chartType?: ChartType | ChartTypeString;

    /**
     * Lookup table for configuration of named data series.
     * Add an enty for each series you want to configure.
     * 
     * @example
     * 
     * ```javascript
     * {
     *      seriesConfig: {
     *          aDataSeries: {
     *              chartType: "bar"
     *          }
     *      }
     * }
     * ```
     */
    series?: ISeriesConfigMap;

    /**
     * Width of the plot.
     * eg 100px, 100%, 100, etc
     */
    width?: number | string;

    /**
     * Height of the plot.
     * eg 100px, 100%, 100, etc
     */
    height?: number | string;

    /**
     * Configuration for the x axis.
     */
    x?: IXAxisConfig;

    /**
     * Configuration for the y axis.
     */
    y?: IYAxisConfig;

    /**
     * Configuration for the second y axis.
     */
    y2?: IYAxisConfig;

    /**
     * Configure the chart's legend.
     */
    legend?: ILegendConfig;

    /**
     * Configure data labels for the whole chart.
     */
    dataLabels?: IDataLabels;

    /**
     * Named styles that can be applied to annotations.
     */
    annotations?: IAnnotationStyles;
}

/**
 * Maps the columns in a dataframe to axis in the chart.
 */
export interface IAxisMap {

    /**
     * The default x axis for the chart.
     */
    x?: IAxisSeriesConfig;

    /**
     * The y axis for the chart.
     */
    y: IYAxisSeriesConfig[];

    /**
     * The optional  second y axis for the chart.
     */
    y2: IYAxisSeriesConfig[];
}

/**
 * A chart definition that is suitable for serialization to JSON and transfer to the browser via REST API.
 * Can be used to instantiate a chart in the browser.
 */
export interface IChartDef {

    /**
     * JSON serializable representation of the data.
     */
    data: ISerializedData;

    /**
     * Defines the look of the chart.
     */
    plotConfig: IPlotConfig;

    /**
     * Maps fields in the data to axis' on the chart.
     */
    axisMap: IAxisMap;
}

