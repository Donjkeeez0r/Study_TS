interface ICommand {
    commandName: string;
    execute(): void;
}

class Light {
    turnOn() {}
    turnOff() {}
};

class MusicPlayer {
    play() {}
    stop() {}
};

class LightOnCommand implements ICommand {
    public commandName = '/on';

    constructor(private light: Light) {}

    execute(): void {
        console.log('Включаю свет...');
        this.light.turnOn();
    }
};

class LightOffCommand implements ICommand {
    public commandName = '/off';

    constructor (private light: Light) {}

    execute(): void {
        console.log('Выключаю свет...');
        this.light.turnOff();
    }
};

class MusicPlayCommand implements ICommand {
    public commandName = '/play';

    constructor (private player: MusicPlayer) {}

    execute(): void {
        console.log('Включаю музыку...');
        this.player.play();
    }
};

class MusicStopCommand implements ICommand {
    public commandName = '/stop';

    constructor (private player: MusicPlayer) {}

    execute(): void {
        console.log('Ставлю музыку на паузу...');
        this.player.stop();
    }
};

class RemoteControl {
    private commands: Map<string, ICommand> = new Map();

    setCommand(buttonId: string, command: ICommand) {
        this.commands.set(buttonId, command);
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

const light = new Light();
const musicPlayer = new MusicPlayer();
const remoteContr = new RemoteControl();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const musicPlay = new MusicPlayCommand(musicPlayer);

remoteContr.setCommand('1', lightOn);
remoteContr.setCommand('2', lightOff);
remoteContr.setCommand('3', musicPlay);

remoteContr.pressButton('1');
remoteContr.pressButton('2');
remoteContr.pressButton('3');
remoteContr.pressButton('4');
