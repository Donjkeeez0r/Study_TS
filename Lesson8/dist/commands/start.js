"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StartCommand {
    userService;
    nameCommand = '/start';
    // в конструкитор принимаем класс UserService, для работы с его методами
    constructor(userService) {
        this.userService = userService;
    }
    ;
    execute() {
        console.log('Привет от Бота, начинаем работу.');
        this.userService.register();
    }
    ;
}
exports.default = StartCommand;
;
