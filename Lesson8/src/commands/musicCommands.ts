import { ICommand } from "../typings";
import { MusicPlayer } from "../structures/devices";


export class MusicPlayCommand implements ICommand {
    public commandName = '/play';

    constructor (private player: MusicPlayer) {}

    execute(): void {
        console.log('Включаю музыку...');
        this.player.play();
    }
};

export class MusicStopCommand implements ICommand {
    public commandName = '/stop';

    constructor (private player: MusicPlayer) {}

    execute(): void {
        console.log('Ставлю музыку на паузу...');
        this.player.stop();
    }
};