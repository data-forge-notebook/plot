import { IChartDef, IYAxisConfig, IAxisSeriesConfig, IYAxisSeriesConfig } from "@plotex/chart-def";
import { ApexOptions } from "apexcharts";
import { IAnnotation, ISerializedData } from "@plotex/serialization";
import * as dayjs from "dayjs";
import * as numeral from "numeral";

//
// Defines a data point for an ApexCharts data series.
//
interface IDataPoint {
    x: number;
    y: number;
}

//
// Build a series for Apex charts.
//
function buildApexSeries(seriesName: string, data: ISerializedData, xAxisValues: any[] | undefined): IDataPoint[] {
    if (!seriesName || !data || !data.series || !data.series[seriesName] || !data.series[seriesName].values) {
        return [];
    }
    return data.series[seriesName].values
        .map((yValue, index) => ({ x: xAxisValues && xAxisValues[index] || index, y: yValue }));
}

//
// Extract series from the chart definition's data.
//
function extractSeries(chartDef: IChartDef, axises: IYAxisSeriesConfig[], xAxis?: IAxisSeriesConfig): ApexAxisChartSeries {
    return axises.map(axisConfig => {
        const xAxisColumnName = axisConfig.x?.series || xAxis && xAxis.series;
        const xAxisValues = xAxisColumnName && chartDef.data.series[xAxisColumnName].values || [];
        const seriesConfig = chartDef.plotConfig.series && chartDef.plotConfig.series[axisConfig.series];
        return {
            name: axisConfig.series, 
            type: seriesConfig?.chartType,
            data: buildApexSeries(axisConfig.series, chartDef.data, xAxisValues),
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
                yAxisConfig.labels!.formatter = value => dayjs(value).format(formatString);
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
    const dataType = inputChartDef
        && inputChartDef.axisMap
        && inputChartDef.axisMap.x 
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

//
// Extracts a single annotation.
//
function extractAnnotation(annotations: ApexAnnotations, annotationsField: string, yAxisIndex: number | undefined, value1Field: string, value2Field: string, inputChartDef: IChartDef, annotation: IAnnotation): void {

    if (!annotation) {
        return;
    }

    const styleName = annotation.style || "default";
    const annotationStyle = inputChartDef.plotConfig.annotations && inputChartDef.plotConfig.annotations[styleName] || {};

    const apexAnnotation: any = {
        label: {
            style: {                
            },
        },
    };

    if (annotationStyle.strokeDashArray !== undefined) {
        apexAnnotation.strokeDashArray = annotationStyle.strokeDashArray;
    }

    if (annotationStyle.lineColor !== undefined) {
        apexAnnotation.borderColor = annotationStyle.lineColor;
    }

    if (annotationStyle.fillColor !== undefined) {
        apexAnnotation.fillColor = annotationStyle.fillColor;
    }

    if (annotationStyle.opacity !== undefined) {
        apexAnnotation.opacity = annotationStyle.opacity;
    }

    if (annotationStyle.offsetX !== undefined) {
        apexAnnotation.offsetX = annotationStyle.offsetX;
    }

    if (annotationStyle.offsetY !== undefined) {
        apexAnnotation.offsetY = annotationStyle.offsetY;
    }

    if (annotationStyle.lineLength !== undefined) {
        apexAnnotation.width = annotationStyle.lineLength;
    }

    if (annotationStyle.label !== undefined) {
        if (annotationStyle.label.borderColor !== undefined) {
            apexAnnotation.label.borderColor = annotationStyle.label.borderColor;
        }

        if (annotationStyle.label.borderWidth !== undefined) {
            apexAnnotation.label.borderWidth = annotationStyle.label.borderWidth;
        }

        if (annotationStyle.label.borderRadius !== undefined) {
            apexAnnotation.label.borderRadius = annotationStyle.label.borderRadius;
        }

        if (annotationStyle.label.text !== undefined) {
            apexAnnotation.label.text = annotationStyle.label.text;
        }

        if (annotationStyle.label.textAnchor !== undefined) {
            apexAnnotation.label.textAnchor = annotationStyle.label.textAnchor;
        }

        if (annotationStyle.label.position !== undefined) {
            apexAnnotation.label.position = annotationStyle.label.position;
        }

        if (annotationStyle.label.orientation !== undefined) {
            apexAnnotation.label.orientation = annotationStyle.label.orientation;
        }

        if (annotationStyle.label.offsetX !== undefined) {
            apexAnnotation.label.offsetX = annotationStyle.label.offsetX;
        }

        if (annotationStyle.label.offsetY !== undefined) {
            apexAnnotation.label.offsetY = annotationStyle.label.offsetY;
        }

        if (annotationStyle.label.backgroundColor !== undefined) {
            apexAnnotation.label.style.background = annotationStyle.label.backgroundColor;
        }

        if (annotationStyle.label.font) {
            if (annotationStyle.label.font.color !== undefined) {
                apexAnnotation.label.style.color = annotationStyle.label.font.color;
            }
    
            if (annotationStyle.label.font.size !== undefined) {
                apexAnnotation.label.style.fontSize = annotationStyle.label.font.size;
            }

            if (annotationStyle.label.font.weight !== undefined) {
                apexAnnotation.label.style.fontWeight = annotationStyle.label.font.weight;
            }

            if (annotationStyle.label.font.family !== undefined) {
                apexAnnotation.label.style.fontFamily = annotationStyle.label.font.family;
            }

            if (annotationStyle.label.padding) {
                apexAnnotation.label.style.padding = annotationStyle.label.padding;
            }
        }
    }


    if (annotation.text) {
        apexAnnotation.label.text = annotation.text;
    }

    apexAnnotation[value1Field] = annotation.value;
    apexAnnotation[value2Field] = annotation.value2;

    if (yAxisIndex !== undefined) {
        apexAnnotation.yAxisIndex = yAxisIndex;
    }

    (annotations as any)[annotationsField]!.push(apexAnnotation);
}

//
// Extracts annotations from a series.
//
function extractAnnotationsFromSeries(annotations: ApexAnnotations, annotationsField: string, yAxisIndex: number | undefined, value1Field: string, value2Field: string, inputChartDef: IChartDef, axisSeriesConfig?: IAxisSeriesConfig): void {
    if (axisSeriesConfig) {
        const series = inputChartDef.data.series[axisSeriesConfig.series];
        if (series) {
            if (series.annotations) {
                for (const annotation of series.annotations) {
                    extractAnnotation(annotations, annotationsField, yAxisIndex, value1Field, value2Field, inputChartDef, annotation);
                }
            }
        }
    }
}

//
// Extracts anotations from a series array.
//
function extractAnnotationsFromSeriesArray(annotations: ApexAnnotations, annotationsField: string, yAxisIndex: number | undefined, value1Field: string, value2Field: string, inputChartDef: IChartDef, seriesConfigs: IAxisSeriesConfig[]): void {
    for (const axisSeriesConfig of seriesConfigs) {
        extractAnnotationsFromSeries(annotations, annotationsField, yAxisIndex, value1Field, value2Field, inputChartDef, axisSeriesConfig);
    }
}

//
// Extracts annotations from the chart def.
//
function extractAnnotations(inputChartDef: IChartDef): ApexAnnotations {
    const annotations: ApexAnnotations = {
        yaxis: [],
        xaxis: [],
    };

    extractAnnotationsFromSeries(annotations, "xaxis", undefined, "x", "x2", inputChartDef, inputChartDef.axisMap.x);
    extractAnnotationsFromSeriesArray(annotations, "yaxis", 0, "y", "y2", inputChartDef, inputChartDef.axisMap.y);
    extractAnnotationsFromSeriesArray(annotations, "yaxis", 1, "y", "y2", inputChartDef, inputChartDef.axisMap.y2);

    return annotations;
}

/**
 * Convert a data-forge-plot chart definition to an ApexCharts chart definition.
 */
export function formatChartDef(inputChartDef: IChartDef): ApexOptions {

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

    const xAxisFormatString = inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.x && inputChartDef.plotConfig.x.format;
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

    if (inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.x) {
        if (inputChartDef.plotConfig.x.label) {
            if (inputChartDef.plotConfig.x.label.text) {
                xaxis.title!.text = inputChartDef.plotConfig.x.label.text;
            }

            if (inputChartDef.plotConfig.x.label.font) {
                if (inputChartDef.plotConfig.x.label.font.size) {
                    xaxis.title!.style!.fontSize = inputChartDef.plotConfig.x.label.font.size;
                }
    
                if (inputChartDef.plotConfig.x.label.font.family) {
                    xaxis.title!.style!.fontFamily = inputChartDef.plotConfig.x.label.font.family;
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

    const yAxisSeries = extractSeries(inputChartDef, inputChartDef.axisMap.y, inputChartDef.axisMap.x)
        .concat(extractSeries(inputChartDef, inputChartDef.axisMap.y2, inputChartDef.axisMap.x));

    const yAxisConfig = extractYAxisConfiguration(inputChartDef.axisMap.y, inputChartDef.plotConfig.y || {}, false, inputChartDef.data)
        .concat(extractYAxisConfiguration(inputChartDef.axisMap.y2, inputChartDef.plotConfig.y2 || {}, true, inputChartDef.data));

    const dataLabels: ApexDataLabels = {
        enabled: false,
        style: {},
    };
    
    const annotations = extractAnnotations(inputChartDef);

    if (inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.dataLabels) {
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

    if (inputChartDef && inputChartDef.plotConfig && inputChartDef.plotConfig.legend) {
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
        xaxis: xaxis,
        dataLabels: dataLabels,
        legend: legend,
        annotations: annotations,
    };
}
