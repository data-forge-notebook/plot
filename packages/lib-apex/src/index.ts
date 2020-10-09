import { IChartDef } from "@plotex/chart-def";
import { formatChartDef } from "./lib/format-chart-def";
export { formatChartDef } from "./lib/format-chart-def";
let ApexCharts = require("apexcharts");
if (ApexCharts.default !== undefined) {
    ApexCharts = ApexCharts.default; // Bit of a hack here. It seems to be the only to get this work as a template and as a module.
}

//
// Interface to control and configure a mounted chart.
//
export interface IChart {

    //
    // Unmount the chart.
    //
    unmount(): void;

    //
    // Size the chart to fit its container.
    //
    sizeToFit(): void;
}

//
// Wrapper for an ApexCharts chart.
//
class ApexChart implements IChart {

    //
    // The ApexCharts chart object.
    //
    private chart?: ApexCharts;

    constructor(chart: ApexCharts) {
        this.chart = chart;
    }

    //
    // Unmount the chart.
    //
    public unmount(): void {
        if (this.chart) {
            this.chart.destroy();
            this.chart = undefined;
        }
    }

    //
    // Size the chart to fit its container.
    //
    public sizeToFit(): void {
        if (this.chart) {
            //todo: this.chart.resize();
        }
    }
}

/**
 * Options to control how the chart is mounted.
 */
export interface IMountOptions {
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

//
// Mount the chart on the DOM element.
//
export async function mountChart(chartDef: IChartDef, domElement: HTMLElement, chartOptions?: IMountOptions): Promise<IChart> {
    const apexChartDef = formatChartDef(chartDef);
    if (!apexChartDef.chart) {
        apexChartDef.chart = {};
    }

    if (!apexChartDef.chart!.animations) {
        apexChartDef.chart!.animations = {};
    }

    if (!apexChartDef.tooltip) {
        apexChartDef.tooltip = {};
    }

    if (!apexChartDef.chart!.zoom) {
        apexChartDef.chart!.zoom = {};
    }

    if (!apexChartDef.chart!.toolbar) {
        apexChartDef.chart!.toolbar = {};
    }
    
    if (chartOptions && chartOptions.makeStatic) {
        apexChartDef.chart!.animations!.enabled = false;
        apexChartDef.tooltip!.enabled = false;
        apexChartDef.chart!.zoom!.enabled = false;
        apexChartDef.chart!.toolbar!.show = false;
    }
    else {
        apexChartDef.chart!.animations!.enabled = true;
        apexChartDef.tooltip!.enabled = true;
        apexChartDef.chart!.zoom!.enabled = true;
        apexChartDef.chart!.toolbar!.show = true;
    }
    
    if (chartOptions && chartOptions.enableAnimations === false) {
        apexChartDef.chart!.animations!.enabled = false;
    }

    if (chartOptions && chartOptions.showDownload !== undefined) {
        if (!apexChartDef.chart!.toolbar!.tools) {
            apexChartDef.chart!.toolbar!.tools = {};
        }
        apexChartDef.chart!.toolbar!.tools!.download = chartOptions.showDownload;
    }

    if (chartOptions && chartOptions.showChartDef) {
        console.log("Formatted chart definition:");
        console.log(JSON.stringify(apexChartDef, null, 4));
    }

    const apexChart = new ApexCharts(domElement, apexChartDef);
    await apexChart.render();
    return new ApexChart(apexChart);
}