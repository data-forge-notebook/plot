
import { AxisType, ChartType, IAxisLabelConfig, ILegendConfig, IDataLabels, IAxisTicksConfiguration } from "@data-forge-plot/chart-def";

/**
 * Configures an axis of the chart.
 */
export interface IAxisConfig {

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
 * Configures the X axis of the chart.
 */
export interface IXAxisConfig extends IAxisConfig {

    /**
     * Sets the type of the axis' data.
     */
    axisType?: AxisType;
}

/**
 * Configures a Y axis of the chart.
 */
export interface IYAxisConfig extends IAxisConfig {
    
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
 * Defines the configuration for the chart.
 */
export interface IPlotConfig {

    /**
     * The type of chart to render.
     * Default to "line".
     */
    chartType?: ChartType;

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
    x?: string | IAxisSeriesConfig;
}

/**
 * Maps the columns in a dataframe to an axis in the chart.
 */
export interface IAxisMap {

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
