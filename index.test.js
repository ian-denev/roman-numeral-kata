const { normalToRoman, romanToNormal } = require("./index");

describe("normalToRoman testing suite", () => {
    test("an argument is required", () => {
        expect(() => normalToRoman()).toThrow("an argument is required");
    })
    test("argument is a Number", () => {
        expect(() => normalToRoman("str")).toThrow("argument must be a Number");
    })
    test("simple / hardcoded conversion", () => {
        const normalNumber = 50;
        const romanNumber = "L";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
    test("zero conversion", () => {
        const normalNumber = 0;
        const romanNumber = "";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
})