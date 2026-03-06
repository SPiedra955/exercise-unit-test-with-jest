// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');
// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); // (3.5 * 1.07)
});

test('10 USD should be 1.462,61', () => {
    const dollars = fromDollarToYen(10);
    expect(dollars).toBeCloseTo(1462.616822429907);
});

test('100 JPY should be 0,5559105431309904', () => {
    const pounds = fromYenToPound(100);
    expect(pounds).toBe(0.5559105431309904);
});
