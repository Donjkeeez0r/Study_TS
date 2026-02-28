class LoggerService {
    private static instance: LoggerService;

    private _logs: string[];

    public static getInstance() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        }
        return LoggerService.instance;
    };

    private constructor() {
        this._logs = [];
    };

    log(message: string) {
        this._logs.push(message);
    }

    getLogs() {
        return this._logs;
    }
}

const firstLog = LoggerService.getInstance();
firstLog.log('Сегодня суббота, время 12:00');
console.log(firstLog.getLogs());

const secondLog = LoggerService.getInstance();
secondLog.log('Сегодня суббота, время 13:00');
console.log(secondLog.getLogs());



import dotenv from 'dotenv';
class ConfigService {
    private static instance: ConfigService;

    private _config: dotenv.DotenvParseOutput;

    private constructor() {
        const cfg = dotenv.config();

        if (cfg.error) {
            throw new Error('Не найден файл .env');
        }

        if (!cfg.parsed) {
            throw new Error('Пустой файл .env');
        }

        this._config = cfg.parsed
    }

    public static getInstance(): ConfigService {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }

        return ConfigService.instance;
    }

    public get(key: string): string {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }

        return response;
    }

    public getNumber(key: string): number {
        const value = Number(this._config[key]);

        if (isNaN(value)) {
            throw new Error('Это не число.');
        }
        return value;
    }
};

class Bot {
    public constructor() {}

    public run() {
        const config = ConfigService.getInstance();

        const token = config.get('BOT_TOKEN');
        const port = config.getNumber('PORT');

        console.log
        (`
            Токен: тип - ${typeof(token)}, значение - ${token}; 
            Порт: тип - ${typeof(port)}, значение - ${port};
        `);
    }
}

const app = new Bot();
app.run();
