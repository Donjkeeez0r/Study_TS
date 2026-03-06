import { Light, MusicPlayer } from "./structures/devices";
import RemoteControl from "./structures/remoteControl";
import { LightOnCommand, LightOffCommand,} from "./commands/lightCommands";
import { MusicStopCommand, MusicPlayCommand } from "./commands/musicCommands";


const light = new Light();
const musicPlayer = new MusicPlayer();
const remoteContr = new RemoteControl();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const musicPlay = new MusicPlayCommand(musicPlayer);
const musicStop = new MusicStopCommand(musicPlayer);

remoteContr.setCommand(lightOn);
remoteContr.setCommand(lightOff);
remoteContr.setCommand(musicPlay);
remoteContr.setCommand(musicStop);

remoteContr.pressButton('/on');
remoteContr.pressButton('/off');
remoteContr.pressButton('/play');
remoteContr.pressButton('/stop');

remoteContr.pressButton('/help');