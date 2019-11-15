import { IChartDef, ChartType, IYAxisSeriesConfig } from "@plotex/chart-def";
import { expandYSeriesConfigArray, expandPlotConfig } from "./expand-chart-def";
import { IPlotConfig } from "./chart-def";
import { ISerializedData } from "@plotex/serialization";

//
// Extract series from the chart definition's data.
//
function extractValues(data: ISerializedData, seriesConfigs: IYAxisSeriesConfig[]): any[] {
    return seriesConfigs
        .filter(axis => data && data.series && data.series[axis.series].type === "number")
        .map(axis => data.series && data.series[axis.series] && data.series[axis.series].values || []);
}

function computeMin(values: number[]): number {
    return Math.floor(Math.min(...values.filter(v => v !== undefined && v !== null && !Number.isNaN(v))) * 100) / 100;
}

function computeMax(values: number[]): number {
    return Math.ceil(Math.max(...values.filter(v => v !== undefined && v !== null && !Number.isNaN(v) && Number.isFinite(v))) * 100) / 100;
}

//
// Apply defaults to a chart definition and patch misssing values.
//
export function applyDefaults(inputChartDef: IChartDef, plotDefaults?: IPlotConfig): IChartDef {

    const chartDef = Object.assign({}, inputChartDef);

    if (!chartDef.plotConfig) {
        if (plotDefaults) {
            chartDef.plotConfig = Object.assign({}, expandPlotConfig(plotDefaults));
        }
        else {
            chartDef.plotConfig = {};
        }
    }
    else {
        if (plotDefaults) {
            chartDef.plotConfig = Object.assign({}, expandPlotConfig(plotDefaults), chartDef.plotConfig);
        }
        else {
            chartDef.plotConfig = Object.assign({}, chartDef.plotConfig);
        }
    }

    if (chartDef.plotConfig.chartType === undefined) {
        chartDef.plotConfig.chartType = ChartType.Line;
    }

    if (chartDef.plotConfig.width === undefined) {
        chartDef.plotConfig.width = 800;
    }

    if (chartDef.plotConfig.height === undefined) {
        chartDef.plotConfig.height = 600;
    }

    if (!chartDef.axisMap) {
        chartDef.axisMap = { y: [], y2: [] };
    }
    else {
        chartDef.axisMap = Object.assign({}, chartDef.axisMap);
        if (!chartDef.axisMap.y) {
            chartDef.axisMap.y = [];
        }

        if (!chartDef.axisMap.y2) {
            chartDef.axisMap.y2 = [];
        }
    }

    if (chartDef.axisMap.y.length === 0 &&
        chartDef.axisMap.y2.length === 0) {
        chartDef.axisMap.y = expandYSeriesConfigArray(Object.keys(chartDef.data.series));
    }

    if (!chartDef.plotConfig.y) {
        chartDef.plotConfig.y = {};
    }

    let y1Values;

    if (chartDef.plotConfig.y.min === undefined) {
        y1Values = extractValues(chartDef.data, chartDef.axisMap.y);

        if (y1Values.length > 0) {        
            chartDef.plotConfig.y.min = computeMin(y1Values);
        }
    }

    if (chartDef.plotConfig.y.max === undefined) {
        if (!y1Values) {
            y1Values = extractValues(chartDef.data, chartDef.axisMap.y);
        }

        if (y1Values.length > 0) {        
            chartDef.plotConfig.y.max = computeMax(y1Values);
        }
    }

    if (!chartDef.plotConfig.y2) {
        chartDef.plotConfig.y2 = {};
    }

    let y2Values;

    if (chartDef.plotConfig.y2.min === undefined) {
        y2Values = extractValues(chartDef.data, chartDef.axisMap.y2);
        if (y2Values.length > 0) {
            chartDef.plotConfig.y2.min = computeMin(y2Values);
        }
    }

    if (chartDef.plotConfig.y2.max === undefined) {
        if (!y2Values) {
            y2Values = extractValues(chartDef.data, chartDef.axisMap.y2);
        }

        if (y2Values.length > 0) {
            chartDef.plotConfig.y2.max = computeMax(y2Values);
        }
    }

    return chartDef;
}
