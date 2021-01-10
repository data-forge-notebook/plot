import { AxisType } from '@plotex/chart-def';
import { AxisTypeString } from '@plotex/chart-def';
import { ChartType } from '@plotex/chart-def';
import { ChartTypeString } from '@plotex/chart-def';
import { HorizontalLabelPosition } from '@plotex/chart-def';
import { HorizontalLabelPositionString } from '@plotex/chart-def';
import { IAnnotation } from '@plotex/serialization';
import { IAnnotationStyles } from '@plotex/chart-def';
import { IAxisLabelConfig } from '@plotex/chart-def';
import { IAxisTicksConfiguration } from '@plotex/chart-def';
import { IChartDef } from '@plotex/chart-def';
import { IDataLabels } from '@plotex/chart-def';
import { ILegendConfig } from '@plotex/chart-def';
import { VerticalLabelPosition } from '@plotex/chart-def';
import { VerticalLabelPositionString } from '@plotex/chart-def';

/**
 * Configures an axis of the chart.
 */
export declare interface IAxisConfig {
    /**
     * Sets the label for the axis.
     */
    label?: string | IAxisLabelConfig;
    /**
     * Configures the tick marks for the axis.
     */
    ticks?: IAxisTicksConfiguration;
}

/**
 * Plot API for configuring a particular axis.
 */
declare interface IAxisConfigAPI<FluentT> extends IPlotAPI {
    /**
     * Set the label for the axis.
     */
    label(label: string): FluentT;
}

/**
 * Maps the columns in a dataframe to an axis in the chart.
 */
export declare interface IAxisMap {
    /**
     * The x axis for the chart.
     */
    x?: string | IAxisSeriesConfig;
    /**
     * The y axis for the chart.
     */
    y?: string | string[] | IYAxisSeriesConfig | IYAxisSeriesConfig[];
    /**
     * The optional  second y axis for the chart.
     */
    y2?: string | string[] | IYAxisSeriesConfig | IYAxisSeriesConfig[];
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
 * Configure a series.
 */
declare interface IAxisSeriesConfigAPI extends IPlotAPI {
}

/**
 * Specifies input to the {@link plot} function.
 *
 * Add your named data series as fields in this object.
 *
 * @example
 * <pre>
 *
 * {
 *     A: [10, 30, 15, 45],
 *     B: [50, 45, 60, 65]
 * }
 */
export declare interface IInputSpec {
    /**
     * Specifies a named series of data to be input to the {@link plot} function.
     */
    [seriesName: string]: SeriesSpec;
}

/**
 * Fluent API for configuring the plot.
 */
export declare interface IPlotAPI {
    /**
     * Set the type of the chart to be plotted.
     *
     * @param chartType - Specifies the chart type.
     */
    chartType(chartType: ChartType | ChartTypeString): IPlotAPI;
    /**
     * Set the width of the chart.
     */
    width(width: number | string): IPlotAPI;
    /**
     * Set the height of the chart.
     */
    height(height: number | string): IPlotAPI;
    /**
     * Configure the x axis.
     */
    x(): IXAxisConfigAPI;
    /**
     * Configure the y axis.
     */
    y(): IYAxisConfigAPI;
    /**
     * Configure the y axis.
     */
    y2(): IYAxisConfigAPI;
    /**
     * Serialize the plot definition so that it can be converted to JSON.
     * The JSON definition of the chart can be used to instantiate the chart in a browser.
     */
    serialize(): IChartDef;
}

/**
 * Defines the configuration for the chart.
 */
export declare interface IPlotConfig {
    /**
     * The type of chart to render.
     * Default to "line".
     */
    chartType?: ChartType | ChartTypeString;
    /**
     * Sets the width of the plot.
     * Default to 800 pixels.
     */
    width?: number | string;
    /**
     * Sets the height of the plot.
     * Default to 600 pixels.
     */
    height?: number | string;
    /**
     * Configures the x axis.
     */
    x?: IXAxisConfig;
    /**
     * Configures the y axis.
     */
    y?: IYAxisConfig;
    /**
     * Configures the second y axis.
     */
    y2?: IYAxisConfig;
    /**
     * Configures the chart's legend.
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
 * Specifies input to the plot function for a single data series.
 */
export declare interface ISeriesSpec {
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
 * Configures the X axis of the chart.
 */
export declare interface IXAxisConfig extends IAxisConfig {
    /**
     * Sets the type of the axis' data.
     */
    axisType?: AxisType | AxisTypeString;
}

/**
 * Plot API for configuring a particular axis.
 */
declare interface IXAxisConfigAPI extends IAxisConfigAPI<IXAxisConfigAPI> {
    /**
     * Set the series for the x axis.
     */
    setSeries(seriesName: string): IXAxisSeriesConfigAPI;
    /**
     * Set the type of the axis.
     */
    type(axisType: AxisType | AxisTypeString): IXAxisSeriesConfigAPI;
    /**
     * Set the position for the label.
     */
    labelPosition(position: HorizontalLabelPosition | HorizontalLabelPositionString): IXAxisConfigAPI;
}

/**
 * Configure an X axis series.
 */
declare interface IXAxisSeriesConfigAPI extends IAxisSeriesConfigAPI {
}

/**
 * Configures a Y axis of the chart.
 */
export declare interface IYAxisConfig extends IAxisConfig {
    /**
     * Sets the minimum value to render on the axis.
     */
    min?: number;
    /**
     * Sets the maximum value to render on the axis.
     */
    max?: number;
}

/**
 * Plot API for configuring a particular Y axis.
 */
declare interface IYAxisConfigAPI extends IAxisConfigAPI<IYAxisConfigAPI> {
    /**
     * Add a series to a Y axis.
     */
    addSeries(seriesName: string): IYAxisSeriesConfigAPI;
    /**
     * Set the position for the label.
     */
    labelPosition(position: VerticalLabelPosition | VerticalLabelPositionString): IYAxisConfigAPI;
    /**
     * Sets the minimum value to render on the axis.
     * @param value - The minimum value to render.
     */
    min(value: number): IYAxisConfigAPI;
    /**
     * Sets the maximum value to render on the axis.
     * @param value - The maximum value to render.
     */
    max(value: number): IYAxisConfigAPI;
}

/**
 * Relates a single Y axis to data series.
 */
export declare interface IYAxisSeriesConfig extends IAxisSeriesConfig {
    /**
     * Configure a separate X axis for the y axis.
     */
    x?: string | IAxisSeriesConfig;
}

/**
 * Configure a Y axis series.
 */
declare interface IYAxisSeriesConfigAPI extends IAxisSeriesConfigAPI {
    /**
     * Set the series label.
     */
    label(label: string): IYAxisSeriesConfigAPI;
    /**
     * Set the display format for values of this series.
     */
    format(formatString: string): IYAxisSeriesConfigAPI;
    /**
     * Configure an explicit x axis for this series.
     */
    setX(seriesName: string): IXAxisSeriesConfigAPI;
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
export declare function plot(input: PlotInput, plotDef?: IPlotConfig, axisMap?: IAxisMap): IPlotAPI;

/**
 * Inputs data to the plot function.
 */
export declare type PlotInput = ValueArray | IInputSpec;

/**
 * Specifies input to the plot function for a single data series.
 * Can be an array of values or an ISeriesSpec object.
 */
export declare type SeriesSpec = ValueArray | ISeriesSpec;

/**
 * A simple array of primitive values or an array of objects (with fields that have primitive values).
 */
export declare type ValueArray = any[];

export * from "@plotex/chart-def";
export * from "@plotex/serialization";

export { }
