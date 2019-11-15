
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

