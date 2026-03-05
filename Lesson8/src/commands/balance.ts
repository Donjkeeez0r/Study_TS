import UserService from "../structures/userService";
import { ICommand } from "../typings";


export default class BalanceCommand implements ICommand {
    public nameCommand = '/balance';
    
    // в конструкитор принимаем класс UserService, для работы с его методами
    constructor(private userService: UserService) {};
    
    execute(): void {
        this.userService.showBalance();
    };
};