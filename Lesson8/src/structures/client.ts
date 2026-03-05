import { ICommand } from "../typings";

export default class Bot {
    // словарь для команд (1й - костыль (массив), 2й - правильный (map))
    
    // через дженерики передаем типы, которые мы хотим видеть в типизации
    // ключ - строка, значение - ICommand
    private commands: Map<string, ICommand> = new Map();
    
    // set - запихиваем команду в Map
    registerCommand(command: ICommand) {
        this.commands.set(command.nameCommand, command)
    };

    onMessage(text: string) {
        // чтобы получить команду по названию и вызвать метод у нее -> get
        const command = this.commands.get(text);

        if (command) {
            command.execute();
        } else {
            console.log('Неизвестная команда')
        }
    }
};