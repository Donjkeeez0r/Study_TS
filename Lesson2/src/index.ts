// Lesson 2

// запись интерфейса
// interface User {
//     name: string;
//     age: number;
//     
//     email - опциональное поле (как может быть так и не может)
//     email?: string;
// }

// применяем интерфейс к переменной
// const alex: User = {
//     name: 'Alex',
//     age: 21,
//     email: 'gfdsfd12r@gmail.com'
// }

// const printName = (user: User) => {
//     console.log(user.email);
// };

// printName(alex);

// interface ChangeRub {
//     rate?: number;
//     rubs: number;
// };

// функция может вернуть либо number либо string (тип юнион)
// const convertRubToUsd = (obj: ChangeRub): number | string => {
//     if (obj.rate) {
//         return obj.rubs / obj.rate;
//     }
//     return 'Ошибка';
// };
// console.log(convertRubToUsd( { rate: 80, rubs: 2000 }));

// interface MailRecipient {
//     email: string;
//     displayName: string;
//     message: string;
// };

// const sendEmail = (user: MailRecipient) => {
//     console.log(`Hello, ${user.displayName}! Sending email to ${user.email}...`);
//     console.log(user.message);
// }

// const mail: MailRecipient = {
//     email: 'adasdfgf@gmail.com',
//     displayName: 'Alex',
//     message: 'Привет, это мое первое сообщение!'
// }; // request("http://gmail.com/get_email")
// sendEmail(mail); // sendEmil(request(http://gmail.com/get_email));

// поля port host только для чтения (нельзя будет изменить)
// interface serverConfig {
//     readonly port: number;
//     readonly host: string;
//     status: string;
// }
// const config: serverConfig = {
//     port: 3000,
//     host: 'localhost',
//     status: 'active',
// }
// config.status = 'stopped';


// НАСЛЕДОВАНИЕ (чтобы не повторялись поля)

// interface Vehicle {
//     brand: string;
//     speed: number;
//     isSuperCar: boolean;
// }

// наследуем интерфейс Vehicle 
// extends Vehicle - наследуем поля из интерфейса Vehicle к интерфейсу Car
// interface Car extends Vehicle {
//     isCabriolet: boolean;
// }

// interface Truck extends Vehicle {
//     cargoCapacity: number;
// }

// const test1: Vehicle = {
//     brand: 'Audi',
//     speed: 300,
//     isSuperCar: false,
// }

// const test2: Car = {
//     brand: 'Audi',
//     speed: 300,
//     isSuperCar: false,
//     isCabriolet: false,
// }

// const test3: Truck = {
//     brand: 'Audi',
//     speed: 300,
//     isSuperCar: false,
//     cargoCapacity: 432,
// }

// const test4: Truck | Car = {
//     brand: 'audi',
//     speed: 300,
//     isSuperCar: false,
//     isCabriolet: false,
//     cargoCapacity: 2000,
// }

// юнион тип - тип который может содержать несколько полей
// type Status = 'succes' | 'error' | 'loading';
// const status: Status = 'succes';

// ИНТЕРФЕЙСЫ - ОПИСАНИЕ СУЩНОСТИ, КЛАССОВ
// ТИП - ОПИСАНИЕ КОМБИНАЦИИ ТИПОВ, ДЛЯ ЮНИОН ТИПОВ

type EnemyType = 'Zombie' | 'Skeleton' | 'Spider';

interface Enemy {
    hp: number;
    attack: number;
    name: string;
    type?: EnemyType;
}

interface Zombie extends Enemy {
    sword: 'diamond' | 'iron';
}

interface Skeleton extends Enemy {
    bow: 'wood' | 'emerald';
}

const zombie: Zombie = {
    hp: 100,
    attack: 20,
    name: 'Zombie',
    sword: 'diamond'
};

const skeleton: Skeleton = {
    hp: 100,
    attack: 20,
    name: 'Zombie',
    bow: 'emerald'
};