const { normalToRoman, romanToNormal } = require("./index");

describe("normalToRoman testing suite", () => {
    test("an argument is required", () => {
        expect(() => normalToRoman()).toThrow("an argument is required");
    })
})