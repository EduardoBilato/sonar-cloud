function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function square(a, b) {
    return a ^ b;
}

function specialSum(a, b) {
    const factor = a * b;
    return (a * factor) + (b) * factor);
}

module.exports = {
    sum,
    minus,
    times,
    div,
    square,
    specialSum,
};