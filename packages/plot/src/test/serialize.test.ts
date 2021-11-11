import "jest";
import { serializeArray, serializeDataSpec, serializeInput, serializeObjectArray, serializeValueArray, serializeValueObject } from "../serialize";

describe("serialize", () => {

    it("can serialize empty value array", ()  => {

        const serialized = serializeValueArray([]);
        expect(serialized).toEqual({
            series: {
                y: {
                    type: "undefined",
                    values: [],
                }
            }
        });
    }); 

    it("can serialize value array", ()  => {

        const serialized = serializeValueArray([1, 2, 3]);;
        expect(serialized).toEqual({
            series: {
                y: {
                    type: "number",
                    values: [1, 2, 3],
                }
            }
        });
    }); 

    it("can serialize empty value object", () => {

        const serialized = serializeValueObject([], {});
        expect(serialized).toEqual({
            series: {},
        });
    });

    it("can serialize value object", () => {

        const serialized = serializeValueObject(["a", "b"], { 
            a: [1, 2], 
            b: [3, 4],
        });
        expect(serialized).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2],
                },
                b: {
                    type: "number",
                    values: [3, 4],
                },
            },
        });
    });

    it("can serialize value object with empty array", () => {

        const serialized = serializeValueObject(["a"], { a: [] });
        expect(serialized).toEqual({
            series: {},
        });
    });

    it("can serialize value object with values", () => {

        const serialized = serializeValueObject(["a"], { a: { values: [1, 2, 3] } });
        expect(serialized).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2, 3],
                },
            },
        });
    });

    it("can serialize value object with values and annotations", () => {

        const serialized = serializeValueObject(["a"], { 
            a: { 
                values: [1, 2, 3],
                annotations: [
                    {
                        value: 5,
                    },
                ],
            },
        });
        expect(serialized).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2, 3],
                    annotations: [
                        {
                            value: 5,
                        },
                    ],
                },
            },
        });
    });

    it("serializeValueObject can expand multiple series from nested arrays", () => {

        const serialized = serializeValueObject(["a"], { 
            a: [[1, 2], [3, 4]], 
        });
        expect(serialized).toEqual({
            series: {
                "a.0": {
                    type: "number",
                    values: [1, 2],
                },
                "a.1": {
                    type: "number",
                    values: [3, 4],
                },
            },
        });
    });


    it("can serialize data spec with values", () => {

        const serialized = serializeDataSpec({
            values: [ 1, 2, 3 ],
        });
        expect(serialized).toEqual({
            series: {
                y: { 
                    type: "number",
                    values: [1, 2, 3],
                },
            },
        });
    });

    it("can serialize data spec with values and annotations", () => {

        const serialized = serializeDataSpec({
            values: [ 1, 2, 3 ],
            annotations: [
                {
                    value: 2,
                },
            ],
        });
        expect(serialized).toEqual({
            series: {
                y: { 
                    type: "number",
                    values: [1, 2, 3],
                    annotations: [
                        {
                            value: 2,
                        },
                    ],
                },
            },
        });
    });

    it("can serialize data spec with multispec", () => {

        const serialized = serializeDataSpec({
            values: {
                a: [1, 2],
                b: [3, 4],
            },
        });
        expect(serialized).toEqual({
            series: {
                a: { 
                    type: "number",
                    values: [1, 2],
                },
                b: { 
                    type: "number",
                    values: [3, 4],
                },
            },
        });
    });

    it("can serialize data spec with multispec and annotations", () => {

        const serialized = serializeDataSpec({
            values: {
                a: [1, 2],
            },
            annotations: [
                {
                    value: 2,
                },
            ],
        });
        expect(serialized).toEqual({
            series: {
                a: { 
                    type: "number",
                    values: [1, 2],
                    annotations: [
                        {
                            value: 2,
                        },
                    ],
                },
            },
        });
    });

    it("can serialize data spec with multispec annotation", () => {

        const serialized = serializeDataSpec({
            values: {
                z: [1, 2],
            },
            annotations: {
                z: [
                    {
                        value: 2,
                    },
                ],
            },
        });
        expect(serialized).toEqual({
            series: {
                z: { 
                    type: "number",
                    values: [1, 2],
                    annotations: [
                        {
                            value: 2,
                        },
                    ],
                },
            },
        });
    });

    it("can serialize empty object array", () => {

        const serialized = serializeObjectArray([]);
        expect(serialized).toEqual({
            series: {}
        });
    });

    it("can serialize object array with no fields", () => {

        const serialized = serializeObjectArray([
            {},
        ]);
        expect(serialized).toEqual({
            series: {}
        });
    });

    it("can serialize object array with fields", () => {

        const serialized = serializeObjectArray([
            {
                a: 1,
                b: 3,
            },
            {
                a: 2,
                b: 4,
            },
        ]);
        expect(serialized).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2],
                },
                b: {
                    type: "number",
                    values: [3, 4],
                },
            },
        });
    });

    it("can serialize ewmpty array", () => {

        const serialized = serializeArray([]);
        expect(serialized).toEqual({
            series: {
                y: {
                    type: "undefined",
                    values: [],
                },
            },
        });
    });

    it("can serialize array - value array", () => {

        const serialized = serializeArray([1, 2]);
        expect(serialized).toEqual({
            series: {
                y: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

    it("can serialize array - object array", () => {

        const serialized = serializeArray([
            { a: 1 },
            { a: 2 }, 
        ]);
        expect(serialized).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

    it("can serialize input - value array", () => {

        const serialized = serializeInput([1, 2]);
        expect(serialized.length).toEqual(2);
        expect(serialized[0]).toEqual({
            series: {
                y: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

    it("can serialize input - data spec", () => {

        const serialized = serializeInput({
            values: [1, 2],
        });
        expect(serialized.length).toEqual(2);
        expect(serialized[0]).toEqual({
            series: {
                y: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

    it("can serialize input - data spec with annotations", () => {

        const serialized = serializeInput({
            values: [1, 2],
            annotations: [
                {
                    value: 3,
                },
            ],
        });
        expect(serialized.length).toEqual(2);
        expect(serialized[0]).toEqual({
            series: {
                y: {
                    type: "number",
                    values: [1, 2],
                    annotations: [
                        {
                            value: 3,
                        },
                    ],
                },
            },
        });
    });

    it("can serialize input - multi spec", () => {

        const serialized = serializeInput({
            a: [1, 2],
        });
        expect(serialized.length).toEqual(2);
        expect(serialized[0]).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

    it("can serialize input - object array", () => {

        const serialized = serializeInput([
            {
                a: 1,
            },
            {
                a: 2,
            },
        ]);
        expect(serialized.length).toEqual(2);
        expect(serialized[0]).toEqual({
            series: {
                a: {
                    type: "number",
                    values: [1, 2],
                },
            },
        });
    });

});
