const { sum, minus, times, div } = require('./operations');

test('adds 7 + 2 is equal to 9', () => {
    expect(sum(7, 2)).toBe(9);
});

test('subtracts 10 - 2 is equal to 8', () => {
    expect(minus(10, 2)).toBe(8);
});

test('multiply 13 * 2 is equal to 26', () => {
    expect(times(13, 2)).toBe(26);
});

test('divide 10 / 2 is equal to 2.5', () => {
    expect(div(5, 2)).toBe(2.5);
});