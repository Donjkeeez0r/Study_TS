import { ICommand } from "../typings";
import UserService from "../structures/userService";

export default class StartCommand implements ICommand {
    public nameCommand = '/start';
    
    // в конструкитор принимаем класс UserService, для работы с его методами
    constructor(private userService: UserService) {};
    
    execute(): void {
        console.log('Привет от Бота, начинаем работу.');

        this.userService.register();
    };
};