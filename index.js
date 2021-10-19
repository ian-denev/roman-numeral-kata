const normalToRoman = number => {
    if (number == undefined) throw new Error("an argument is required");
    else if (number.constructor != "Number") throw new Error("argument must be a Number");
}

const romanToNormal = number => {

}

module.exports = { normalToRoman, romanToNormal }
