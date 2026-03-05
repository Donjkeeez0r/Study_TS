"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bot {
    // словарь для команд (1й - костыль (массив), 2й - правильный (map))
    // через дженерики передаем типы, которые мы хотим видеть в типизации
    // ключ - строка, значение - ICommand
    commands = new Map();
    // set - запихиваем команду в Map
    registerCommand(command) {
        this.commands.set(command.nameCommand, command);
    }
    ;
    onMessage(text) {
        // чтобы получить команду по названию и вызвать метод у нее -> get
        const command = this.commands.get(text);
        if (command) {
            command.execute();
        }
        else {
            console.log('Неизвестная команда');
        }
    }
}
exports.default = Bot;
;
