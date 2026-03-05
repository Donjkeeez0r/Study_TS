"use strict";
// Lesson 8: Паттерн command
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// интерфейс, который описывает, какие методы вызова есть
// interface ICommand {
//     nameCommand: string;
//     execute(): void;
// }
// создание получателя (бизнес логика)
// class UserService {
//     showBalance() {
//         console.log(`Ваш баланс: 1500 руб.`);
//     };
//     register() {
//         console.log('Пользователь успешно зарегистрирован.')
//     };
// };
// class StartCommand implements ICommand {
//     public nameCommand = '/start';
//     // в конструкитор принимаем класс UserService, для работы с его методами
//     constructor(private userService: UserService) {};
//     execute(): void {
//         console.log('Привет, от бота, начинаем работу.');
//         this.userService.register();
//     };
// };
// class BalanceCommand implements ICommand {
//     public nameCommand = '/balance';
//     // в конструкитор принимаем класс UserService, для работы с его методами
//     constructor(private userService: UserService) {};
//     execute(): void {
//         this.userService.showBalance();
//     };
// };
// class HelpCommand implements ICommand {
//     public nameCommand = '/help';
//     execute(): void {
//         console.log('Введи любую команду: /start или /balance')
//     }
// };
// логика самого бота
// class Bot {
//     // словарь для команд (1й - костыль (массив), 2й - правильный (map))
//     // через дженерики передаем типы, которые мы хотим видеть в типизации
//     // ключ - строка, значение - ICommand
//     private commands: Map<string, ICommand> = new Map();
//     // set - запихиваем команду в Map
//     registerCommand(command: ICommand) {
//         this.commands.set(command.nameCommand, command)
//     };
//     onMessage(text: string) {
//         // чтобы получить команду по названию и вызвать метод у нее -> get
//         const command = this.commands.get(text);
//         if (command) {
//             command.execute();
//         } else {
//             console.log('Неизвестная команда')
//         }
//     }
// };
// сборка воедино
// const userService = new UserService();
// const bot = new Bot();
// регистрация команд (массив команд)
// const commands = [
//     new StartCommand(userService), 
//     new BalanceCommand(userService), 
//     new HelpCommand()
// ];
// for (const command of commands) {
//     bot.registerCommand(command);
// }
// bot.onMessage('/balance');
// Вторая версия:
const balance_1 = __importDefault(require("./commands/balance"));
const help_1 = __importDefault(require("./commands/help"));
const start_1 = __importDefault(require("./commands/start"));
const client_1 = __importDefault(require("./structures/client"));
const userService_1 = __importDefault(require("./structures/userService"));
const userService = new userService_1.default();
const bot = new client_1.default();
const commands = [
    new start_1.default(userService),
    new balance_1.default(userService),
    new help_1.default()
];
for (const command of commands) {
    bot.registerCommand(command);
}
;
bot.onMessage('/help');
