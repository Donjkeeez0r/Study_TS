const greet = (name: string): string => {
    return 'Hello, ' + name;
};

const multiply = (a: number, b: number): number => {
    return a * b;
};

const isAdult = (age: number): boolean => {
    return age >= 18;
};

console.log(greet('Daniil'));
console.log(multiply(52, 25));
console.log(isAdult(16));

