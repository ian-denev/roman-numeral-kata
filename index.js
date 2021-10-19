const normalToRoman = normalNumber => {
    if (normalNumber == undefined) throw new Error("an argument is required");
    else if (typeof normalNumber != "number") throw new Error("argument must be a Number");

    const normalToRomanConversion = {
        0: '',
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }

    const digitExpression = {
        0: [""],
        1: ["1"],
        2: ["1", "1"],
        3: ["1", "1", "1"],
        4: ["1", "5"],
        5: ["5"],
        6: ["5", "1"],
        7: ["5", "1", "1"],
        8: ["5", "1", "1", "1"],
        9: ["1", "10"]
    }

    let result = [];

    [...normalNumber.toString()].reverse().forEach((el, index) => {
        el = digitExpression[el].map(el => normalToRomanConversion[el * 10 ** index]);
        result.unshift(el);
    })

    return result.flat().join("");
}

const romanToNormal = romanNumber => {
    if (romanNumber == undefined) throw new Error("an argument is required");
    else if (typeof romanNumber != "string") throw new Error("argument must be a String");

    const romanToNormalConversion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const convertedRomanDigits = [...romanNumber].reverse().map(el => romanToNormalConversion[el]);

    return convertedRomanDigits.reduce((total, curr, index) => {
        if (curr < convertedRomanDigits[index - 1]) return total - curr;
        return total + curr;
    }, 0);
}

module.exports = { normalToRoman, romanToNormal }
