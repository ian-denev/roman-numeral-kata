const normalToRoman = number => {
    if (number == undefined) throw new Error("an argument is required");
    else if (typeof number != "number") throw new Error("argument must be a Number");

    const normalToRomanConversion = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    
    return normalToRomanConversion[number];
}

const romanToNormal = number => {

}

module.exports = { normalToRoman, romanToNormal }
