"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => {
    return 'Hello, ' + name;
};
const multiply = (a, b) => {
    return a * b;
};
const isAdult = (age) => {
    return age >= 18;
};
console.log(greet('Daniil'));
console.log(multiply(52, 25));
console.log(isAdult(16));
