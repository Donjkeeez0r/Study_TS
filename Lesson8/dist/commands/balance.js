"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceCommand {
    userService;
    nameCommand = '/balance';
    // в конструкитор принимаем класс UserService, для работы с его методами
    constructor(userService) {
        this.userService = userService;
    }
    ;
    execute() {
        this.userService.showBalance();
    }
    ;
}
exports.default = BalanceCommand;
;
