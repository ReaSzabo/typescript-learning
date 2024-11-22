// Write a arrow function that returns the minus version of a number.
// E.g parameter is 2, return value is -2.
// E.g parameter is 12, return value is -12.
// E.g parameter is -8, return value is -8.

const reverse = (x: number): number => {
    return x > 0 ? 0 - x : x;
}

console.log(reverse(-2));