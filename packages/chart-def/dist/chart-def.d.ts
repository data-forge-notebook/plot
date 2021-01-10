import { ISerializedData } from '@plotex/serialization';

/**
 * Sets the type of an axis.
 */
export declare enum AxisType {
    Numerical = "numerical",
    Timeseries = "timeseries",
    Category = "category"
}

/**
 * Sets the type of an axis.
 */
export declare type AxisTypeString = "numerical" | "timeseries" | "category";

/**
 * Sets the type of chart to output.
 */
export declare enum ChartType {
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
    Radar = "radar"
}

/**
 * Sets the type of chart to output.
 */
export declare type ChartTypeString = "line" | "bar" | "scatter" | "area" | "histogram" | "pie" | "donut" | "radialBar" | "bubble" | "heatmap" | "candlestick" | "radar";

/**
 * Sets the position of a horizontal label.
 */
export declare enum HorizontalLabelPosition {
    InnerRight = "inner-right",
    InnerCenter = "inner-center",
    InnerLeft = "inner-left",
    OuterRight = "outer-right",
    OuterCenter = "outer-center",
    OuterLeft = "outer-left"
}

/**
 * Sets the position of a horizontal label.
 */
export declare type HorizontalLabelPositionString = "inner-right" | "inner-center" | "inner-left" | "outer-right" | "outer-center" | "outer-left";

/**
 * Sets the style for the annotation's label.
 */
export declare interface IAnnotationLabelStyle {
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
export declare interface IAnnotationStyle {
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
export declare interface IAnnotationStyles {
    [styleName: string]: IAnnotationStyle;
}

/**
 * Configures an axis of the chart.
 */
export declare interface IAxisConfig {
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
    format?: string;
}

/**
 * Defines the configuration of an axis label.
 */
export declare interface IAxisLabelConfig {
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
 * Maps the columns in a dataframe to axis in the chart.
 */
export declare interface IAxisMap {
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
 * Relates a single axis to data series.
 */
export declare interface IAxisSeriesConfig {
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
 * Configuration for axis tick marks.
 */
export declare interface IAxisTicksConfiguration {
    /**
     * Configures the font for tick marks..
     */
    font?: IFontConfig;
}

/**
 * A chart definition that is suitable for serialization to JSON and transfer to the browser via REST API.
 * Can be used to instantiate a chart in the browser.
 */
export declare interface IChartDef {
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

/**
 * Configure labels that are applied to each data point.
 */
export declare interface IDataLabels {
    /**
     * Configure the font for data labels.
     */
    font?: IFontConfig;
}

/**
 * Configures the font for a label.
 */
export declare interface IFontConfig {
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
 * Configures the legend of the chart.
 */
export declare interface ILegendConfig {
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
export declare interface IPadding {
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
 * Defines the chart.
 */
export declare interface IPlotConfig {
    /**
     * The type of chart to render.
     */
    chartType?: ChartType | ChartTypeString;
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
 * Configures the label for a series.
 */
export declare interface ISeriesLabelConfig {
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
 * Configures the X axis of the chart.
 */
export declare interface IXAxisConfig extends IAxisConfig {
    /**
     * Sets the type of the axis' data.
     */
    axisType?: AxisType | AxisTypeString;
}

/**
 * Configures a Y axis of the chart.
 */
export declare interface IYAxisConfig extends IAxisConfig {
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
 * Relates a single Y axis to data series.
 */
export declare interface IYAxisSeriesConfig extends IAxisSeriesConfig {
    /**
     * Configure a separate X axis for the y axis.
     */
    x?: IAxisSeriesConfig;
}

/**
 * Sets the position of a vertical label.
 */
export declare enum VerticalLabelPosition {
    InnerTop = "inner-top",
    InnerMiddle = "inner-middle",
    InnerBottom = "inner-bottom",
    OuterTop = "outer-top",
    OuterMiddle = "outer-middle",
    OuterBottom = "outer-bottom"
}

/**
 * Sets the position of a vertical label.
 */
export declare type VerticalLabelPositionString = "inner-top" | "inner-middle" | "inner-bottom" | "outer-top" | "outer-middle" | "outer-bottom";

export { }
