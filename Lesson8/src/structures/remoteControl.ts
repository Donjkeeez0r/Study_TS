import { ICommand } from "../typings";

export default class RemoteControl {
    private commands: Map<string, ICommand> = new Map();

    setCommand(command: ICommand) {
        this.commands.set(command.commandName, command);
    };

    pressButton(buttonId: string) {
        const button = this.commands.get(buttonId);

        if (button) {
            button.execute();
        } else {
            console.log('Неизвестная кнопка.');
        }
    }
};