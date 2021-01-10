import { ApexOptions } from 'apexcharts';
import { IChartDef } from '@plotex/chart-def';

/**
 * Convert a data-forge-plot chart definition to an ApexCharts chart definition.
 */
export declare function formatChartDef(inputChartDef: IChartDef): ApexOptions;

export declare interface IChart {
    unmount(): void;
    sizeToFit(): void;
}

/**
 * Options to control how the chart is mounted.
 */
export declare interface IMountOptions {
    /**
     * Set to true to make the chart static.
     * The chart will have interactive features and animations disabled.
     */
    makeStatic?: boolean;
    /**
     * Set to false to disble animations in charts.
     * Defaults to true.
     */
    enableAnimations?: boolean;
    /**
     * Debug log the chart definition after formatting.
     */
    showChartDef?: boolean;
    /**
     * Enable/disable the download button.
     */
    showDownload?: boolean;
}

export declare function mountChart(chartDef: IChartDef, domElement: HTMLElement, chartOptions?: IMountOptions): Promise<IChart>;

export { }
