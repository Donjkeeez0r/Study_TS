// Точка входа (запуск бота)

import { BotApp } from "./bot/client";
import { PlayCommand } from "./bot/commands/play";
import { StartCommand } from "./bot/commands/start";
import { ConfigService } from "./services/config";
import { PcService } from "./services/pc";

const startBot = () => {
    console.log('Инициализация бота');

    // создаем экземпляры команд, бота, сервисов
    const configService = new ConfigService();
    const pcService = new PcService();

    // инициализация команд
    const startCmd = new StartCommand();
    const playCmd = new PlayCommand(pcService);

    const allCommands = [startCmd, playCmd];

    const botApp = new BotApp(configService, allCommands);

    botApp.start();
};

startBot();