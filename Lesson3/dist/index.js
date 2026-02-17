"use strict";
// Lesson 3
Object.defineProperty(exports, "__esModule", { value: true });
// Класс:
// class User {
//     // создание полей для класса
//     private name: string;
//     private age: number;
//     // конструктор (инициализация полей в конструкторе)
//     constructor(userName: string, userAge: number) {
//         // this - означает этот конкректный объект
//         this.name = userName;
//         this.age = userAge;
//     }
//     // методы класса
//     public greet() {
//         console.log(`Привет, я ${this.name}, мне ${this.age} лет.`);
//     }
// };
// // Экземпляр класса (создание нового)
// const alex = new User('Alex', 25);
// const vika = new User('Vika', 19);
// // обращение к экземплярам
// alex.greet();
// vika.greet();
// интерфейс для класса
// interface IUser {
//     name: string;
//     age: number;
//     sayHello(): string;
// };
// // создание абстракции интерфейса в класс
// class User implements IUser {
//     public name: string;
//     public age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(): string {
//         return `Привет, меня зовут ${this.name}, мне ${this.age}.`
//     }
// }
class BankAccount {
    _balance;
    _owner;
    constructor(owner, balance) {
        this._balance = balance;
        this._owner = owner;
    }
    // Геттеры и сеттеры:
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value > 1000 || value < 0) {
            console.log('Ошибка установки баланса!');
            return;
        }
        this._balance = value;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log('Ошибка: сумма должна быть больше нуля!');
            return;
        }
        this._balance += amount;
        console.log(`${this._owner}, ваш счет пополнен на ${amount}. Текущий баланс: ${this._balance}`);
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log('Ошибка: Недостаточно средств!');
            return;
        }
        this._balance -= amount;
        console.log(`Выдано: ${amount}. Остаток: ${this._balance}.`);
    }
}
;
const myAccount = new BankAccount('Alex', 0);
myAccount.balance;
myAccount.balance = -134535;
// myAccount.deposit(0);
// myAccount.withdraw(200);
// myAccount.deposit(1000);
