import { ICommand } from "../typings";

export default class HelpCommand implements ICommand {
    public nameCommand = '/help';
    
    execute(): void {
        console.log('Введи любую команду: /start или /balance')
    }
};