/**
 * An annotation applied to the series.
 */
export interface IAnnotation {

    /**
     * The value where the annotation is to be applied.
     */
    value: any;

    /**
     * Specifies a second value to create an annotation or a range of values.
     */
    value2?: any;

    /**
     * Text for the annotation, this can also be set through the style.
     */
    text?: string;

    /**
     * Sets the style of the annotation.
     * This allows style to be set for a chart as part of the "plot config" ({@link IPlotConfig}).
     */
    style?: string;
}

/**
 * A serialized data series.
 */
export interface IDataSeries {

    /**
     * The data type of the series.
     */
    type: string;

    /**
     * Values in the data data series.
     */
    values: any[];

    /**
     * Annotations applied to this series.
     */
    annotations?: IAnnotation[];
}

/**
 * A map of named data series.
 */
export interface IDataSeriesMap {
    [index: string]: IDataSeries;
}

/**
 * The serialized form of a data. 
 * This is an ordinary JavaScript data structure that can be used to transfer a data across the wire and
 * reinstantiate it on the otherside.
 */
export interface ISerializedData {

    /**
     * Collection of named data series.
     */
    series: IDataSeriesMap;
}

