import "jest";
import { determineType, isNumber, isBoolean, isObject, isString, isDate, isUndefined, isFunction } from "../utils";

describe("utils", () => {

    it("can determine type of date", () => {
        expect(determineType(new Date())).toEqual("date");
    });

    it("can determine type of string", () => {
        expect(determineType("string")).toEqual("string");
    });

    it("can determine type of boolean", () => {
        expect(determineType(true)).toEqual("boolean");
    });

    it("can determine type of number", () => {
        expect(determineType(12.34)).toEqual("number");
    });

    it("can detect object", () => {
        expect(isObject({})).toEqual(true);
    });

    it("a number is not an object", () => {
        expect(isObject(5)).toEqual(false);        
    });

    it("a string is not an object", () => {
        expect(isObject("hello")).toEqual(false);
    });

    it("a date is not a object", () => {
        expect(isObject(new Date())).toEqual(false);
    });

    it("a array is not a object", () => {
        expect(isObject([])).toEqual(false);
    });

    it("a function is not a object", () => {
        expect(isObject(() => {})).toEqual(false);
    });
    
    it("can detect number", () => {
        expect(isNumber(5)).toEqual(true);
    });

    it("can detect string", () => {
        expect(isString("hello")).toEqual(true);
    });

    it("can detect date", () => {
        expect(isDate(new Date())).toEqual(true);
    });

    it("can detect boolean", () => {
        expect(isBoolean(true)).toEqual(true);
        expect(isBoolean(false)).toEqual(true);
    });
    
    it("can detect undefined", () => {
        expect(isUndefined(undefined)).toEqual(true);
        expect(isUndefined(null)).toEqual(false);
        expect(isUndefined(0)).toEqual(false);
    });

    it("can detect function", () => {
        expect(isFunction(() => {})).toEqual(true);
    });
});
