"use strict";
// Lesson 5: Методы SOLID
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    color;
    constructor(color) {
        this.color = color;
    }
    isSatisfied(item) {
        return item.color === this.color;
    }
}
class Size {
    size;
    constructor(size) {
        this.size = size;
    }
    isSatisfied(item) {
        return item.size === this.size;
    }
}
class ProductFilter {
    filter(products, spec) {
        return products.filter((product) => spec.isSatisfied(product));
    }
}
const cart = new ProductFilter();
const filteredCart = cart.filter([{ color: 'red', size: 'L' }, { color: 'green', size: 'XL' }], new Color('red'));
console.log(cart, filteredCart);
