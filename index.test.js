const { normalToRoman, romanToNormal } = require("./index");

describe("normalToRoman testing suite", () => {
    test("an argument is required", () => {
        expect(() => normalToRoman()).toThrow("an argument is required");
    })
    test("argument is a Number", () => {
        expect(() => normalToRoman("str")).toThrow("argument must be a Number");
    })
})