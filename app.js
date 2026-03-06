// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs['USD'];
}
const fromDollarToYen = (usd) => {
    return usd * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
}
const fromYenToPound = (yen) => {
    return yen * (oneEuroIs["GBP"] / oneEuroIs["JPY"]);
}
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };