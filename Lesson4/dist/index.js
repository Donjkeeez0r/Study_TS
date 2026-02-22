"use strict";
// // Lesson 4
Object.defineProperty(exports, "__esModule", { value: true });
// // protected - дает изменение поля и в родительском и в дочернем
// // private - дает изменение только в родительском 
// // Родительский класс
// class Employee {
//     // базовый конструктор
//     constructor(
//         public name: string,
//         protected salary: number,
//     ) {}
//     work() {
//         console.log(`${this.name} выполняет обычную работу.`);
//     }
//     getSalary() {
//         return this.salary;
//     }
// };
// // Дочерний класс
// class Manager extends Employee {
//     // всегда вызываем сначала родительский класс
//     constructor(name: string, salary: number, public teamSize: number) {
//         // передаем поля от родительского класса
//         // super - конструктор родительского класса
//         super(name, salary);
//     }
//     // полиморфизм (меняем тело метода в дочернем класса)
//     // полиморфизм -> дает доступ к переопредлению методов, которые есть в родительском классе
//     work() {
//         console.log(`${this.name} пьет кофе и раздает задачи!`);
//     }
//     holdMeeting() {
//         console.log(`${this.name} проводит совещание для ${this.teamSize} человек.`);
//     }
// }
// const empl = new Employee('Alex', 500);
// const manager = new Manager('Alex', 500, 9);
// manager.holdMeeting();
// console.log(manager.getSalary());
// manager.work();
// Абстрактный класс (запрещаем его создавать через new, но разрешаем его наследовать)
class Transport {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    stop() {
        console.log('Транспорт остановился');
    }
}
class Car extends Transport {
    move() {
        console.log(`Машина едет по дороге со скоростью ${this.speed} км/ч`);
    }
}
class Ship extends Transport {
    move() {
        console.log(`Корабль плывет по воде со скоростью ${this.speed} км/ч`);
    }
}
const myCar = new Car(500);
myCar.move();
const myShip = new Ship(10);
myShip.speed;
