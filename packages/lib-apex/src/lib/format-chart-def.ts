import { IChartDef, IAxisConfig, IYAxisConfig, ChartType, IAxisMap, IAxisSeriesConfig, IYAxisSeriesConfig } from "@plotex/chart-def";
import { ApexOptions } from "apexcharts";
import { ISerializedData } from "@plotex/serialization";
import * as dayjs from "dayjs";
import * as numeral from "numeral";

//
// Build a series for Apex cahrts.
//
function buildApexSeries(columnName: string, data: ISerializedData, xAxisValues: any[]) {
    if (!columnName || !data || !data.series || !data.series[columnName] || !data.series[columnName].values) {
        return [];
    }
    return data.series[columnName].values
        .map((yValue, index) => ({ x: xAxisValues[index], y: yValue }));
}

//
// Extract series from the chart definition's data.
//
function extractSeries(data: ISerializedData, axises: IYAxisSeriesConfig[], xAxis?: IAxisSeriesConfig): ApexAxisChartSeries {
    return axises.map(seriesConfig => {
        const columnName = seriesConfig.series;
        const xAxisColumnName = seriesConfig && seriesConfig.x && seriesConfig.x.series || xAxis && xAxis.series;
        const xAxisValues = xAxisColumnName && data && data.series && data.series[xAxisColumnName] && data.series[xAxisColumnName].values || [];
        return {
            name: columnName, 
            data: buildApexSeries(columnName, data, xAxisValues),
        };
    });
}

//
// Get the configuration Y axis for apex.
//
function extractYAxisConfiguration(seriesConfigs: IYAxisSeriesConfig[], axisConfig: IYAxisConfig, opposite: boolean, data: ISerializedData): ApexYAxis[] {
    let show: boolean = true;
    return seriesConfigs.map(seriesConfig => {    
        const yAxisConfig: ApexYAxis = { 
            opposite, 
            show,
            min: axisConfig.min,
            max: axisConfig.max,
            labels: {
                style: {},
            },
            title: { 
                style: {},
            },
        };

        const formatString = axisConfig.format;
        const columnName = seriesConfig.series;
        const dataType = data && data.series && data.series[columnName] && data.series[columnName].type;
        if (formatString) {
            if (dataType === "date") {
                yAxisConfig.labels!.formatter = value => dayjs(value).format(formatString); //todo: this code should be part of serialization.
            }
            else if (dataType === "number") {
                yAxisConfig.labels!.formatter = value => numeral(value).format(formatString);
            }
        }
        else {
            if (dataType === "number") {
                yAxisConfig.labels!.formatter = value => numeral(value).format("0.00"); // Default to formatting with two decimal places for numeric data with no format string.
            }
        }

        if (axisConfig.label) {
            if (axisConfig.label.text) {
                yAxisConfig.title!.text = axisConfig.label.text;
            }

            if (axisConfig.label.font) {
                if (axisConfig.label.font.size) {
                    yAxisConfig.title!.style!.fontSize = axisConfig.label.font.size;
                }

                if (axisConfig.label.font.family) {
                    yAxisConfig.title!.style!.fontFamily = axisConfig.label.font.family;
                }
            }
        }

        if (axisConfig.ticks) {
            if (axisConfig.ticks.font) {
                if (axisConfig.ticks.font.size) {
                    yAxisConfig.labels!.style!.fontSize = axisConfig.ticks.font.size;
                }

                if (axisConfig.ticks.font.family) {
                    yAxisConfig.labels!.style!.fontFamily = axisConfig.ticks.font.family;
                }
            }
        }
    
        show = false;
        return yAxisConfig;
    });
}

//
// Determine the Apex type to use for the x axis.
//
function determineXAxisType(inputChartDef: IChartDef): string {
    const dataType = inputChartDef.axisMap.x 
        && inputChartDef.axisMap.x.series 
        && inputChartDef.data.series[inputChartDef.axisMap.x.series].type
        || "number";
    if (dataType === "date") {
        return "datetime";
    }
    else if (dataType === "number") {
        return "numeric";
    }
    else {
        return "category";
    }
}

/**
 * Convert a data-forge-plot chart definition to an ApexCharts chart definition.
 */
export function formatChartDef(inputChartDef: IChartDef): ApexOptions {

    //todo: use the serialization library to deserialize the chart def here!

    const xaxisType = determineXAxisType(inputChartDef);
    const xaxis: ApexXAxis = {
        type: xaxisType as any, // The type in Apex is wrong. "categories" instead of "category".
        title: {
            style: {

            },
        },
        labels: {
            style: {

            },
        },
    };

    const xAxisFormatString = inputChartDef.plotConfig.x && inputChartDef.plotConfig.x.format;
    if (xAxisFormatString) {
        if (xaxisType === "datetime") {
            xaxis.labels!.formatter = value => dayjs(value).format(xAxisFormatString);
        }
        else if (xaxisType === "numeric") {
            xaxis.labels!.formatter = value => numeral(value).format(xAxisFormatString);
        }
    }
    else {
        if (xaxisType === "numeric") {
            xaxis.labels!.formatter = value => numeral(value).format("0.00"); // Default to formatting with two decimal places for numeric data with no format string.
        }
    }

    if (inputChartDef.plotConfig.x) {
        if (inputChartDef.plotConfig.x.label) {
            if (inputChartDef.plotConfig.x.label.text) {
                xaxis.title!.text = inputChartDef.plotConfig.x.label.text;
            }

            if (inputChartDef.plotConfig.x.label.font) {
                if (inputChartDef.plotConfig.x.label.font.size) {
                    xaxis.title!.style!.fontSize = inputChartDef.plotConfig.x.label.font.size;
                }
    
                if (inputChartDef.plotConfig.x.label.font.family) {
                    (xaxis.title!.style! as any).fontFamily = inputChartDef.plotConfig.x.label.font.family; //TODO: Typecast to any due to missing TS types in ApexCharts.
                }
            }
        }

        if (inputChartDef.plotConfig.x.ticks) {
            if (inputChartDef.plotConfig.x.ticks.font) {
                if (inputChartDef.plotConfig.x.ticks.font.size) {
                    xaxis.labels!.style!.fontSize = inputChartDef.plotConfig.x.ticks.font.size;
                }
    
                if (inputChartDef.plotConfig.x.ticks.font.family) {
                    xaxis.labels!.style!.fontFamily = inputChartDef.plotConfig.x.ticks.font.family;
                }
            }
        }
    }

    const yAxisSeries = extractSeries(inputChartDef.data, inputChartDef.axisMap.y, inputChartDef.axisMap.x)
        .concat(extractSeries(inputChartDef.data, inputChartDef.axisMap.y2, inputChartDef.axisMap.x));

    const yAxisConfig = extractYAxisConfiguration(inputChartDef.axisMap.y, inputChartDef.plotConfig.y || {}, false, inputChartDef.data)
        .concat(extractYAxisConfiguration(inputChartDef.axisMap.y2, inputChartDef.plotConfig.y2 || {}, true, inputChartDef.data));

    const dataLabels: ApexDataLabels = {
        enabled: false,
        style: {},
    };

    if (inputChartDef.plotConfig && inputChartDef.plotConfig.dataLabels) {
        dataLabels.enabled = true;

        if (inputChartDef.plotConfig.dataLabels.font) {
            if (inputChartDef.plotConfig.dataLabels.font.size) {
                dataLabels.style!.fontSize = inputChartDef.plotConfig.dataLabels.font.size;
            }

            if (inputChartDef.plotConfig.dataLabels.font.family) {
                dataLabels.style!.fontFamily = inputChartDef.plotConfig.dataLabels.font.family;
            }
        }
    }

    const legend: ApexLegend = {
        show: inputChartDef.plotConfig.legend && inputChartDef.plotConfig.legend.show !== undefined
            ?  inputChartDef.plotConfig.legend.show
            : true,
    };

    if (inputChartDef.plotConfig && inputChartDef.plotConfig.legend) {
        if (inputChartDef.plotConfig.legend.font) {
            if (inputChartDef.plotConfig.legend.font.size) {
                legend.fontSize = inputChartDef.plotConfig.legend.font.size;
            }

            if (inputChartDef.plotConfig.legend.font.family) {
                legend.fontFamily = inputChartDef.plotConfig.legend.font.family;
            }
        }
    }

    return {
        chart: {
            type: inputChartDef.plotConfig.chartType,
            width: inputChartDef.plotConfig.width,
            height: inputChartDef.plotConfig.height,
        },
        stroke: {
            width: 1,
        },
        series: yAxisSeries,
        yaxis: yAxisConfig,
        xaxis,
        dataLabels,
        legend,
    };
}
