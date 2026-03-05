"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// создание получателя (бизнес логика)
class UserService {
    showBalance() {
        console.log(`Ваш баланс: 1500 руб.`);
    }
    ;
    register() {
        console.log('Пользователь успешно зарегистрирован.');
    }
    ;
}
exports.default = UserService;
;
