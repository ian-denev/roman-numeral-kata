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
    test("conversion with one roman digit per position", () => {
        const normalNumber = 5;
        const romanNumber = "V";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
    test("conversion with multiple roman digits per position", () => {
        const normalNumber = 8;
        const romanNumber = "VIII";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
    test("conversion when every roman digit is followed by smaller or same", () => {
        const normalNumber = 17;
        const romanNumber = "XVII";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
    test("conversion when some roman digits are followed by bigger", () => {
        const normalNumber = 9;
        const romanNumber = "IX";
        expect(normalToRoman(normalNumber)).toBe(romanNumber);
    })
    test("conversion with multiple positions", () => {
        const normalNumber = 96;
        const romanNumberCorrect = "XCVI";
        const romanNumberWrong = "IXVI";
        expect(normalToRoman(normalNumber)).toBe(romanNumberCorrect);
        expect(normalToRoman(normalNumber)).toNotBe(romanNumberWrong);
    })
})
