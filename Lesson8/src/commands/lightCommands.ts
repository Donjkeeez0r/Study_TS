import { Light } from "../structures/devices";
import { ICommand } from "../typings";


export class LightOnCommand implements ICommand {
    public commandName = '/on';

    constructor(private light: Light) {}

    execute(): void {
        console.log('Включаю свет...');
        this.light.turnOn(); 
    }
};

export class LightOffCommand implements ICommand {
    public commandName = '/off';

    constructor (private light: Light) {}

    execute(): void {
        console.log('Выключаю свет...');
        this.light.turnOff();
    }
};