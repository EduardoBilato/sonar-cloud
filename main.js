const { sum, minus, times, div } = require('./src/operations');

(function main() {
    const a = sum(7, 2);
    const b = minus(10, 2);
    const c = times(13, 2);
    const d = div(5, 2);
    console.log('Result of sum is:', a);
    console.log('Result of minus is:', b);
    console.log('Result of times is:', c);
    console.log('Result of div is:', d);
})();