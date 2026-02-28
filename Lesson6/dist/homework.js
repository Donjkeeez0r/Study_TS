"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerService {
    static instance;
    _logs;
    static getInstance() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        }
        return LoggerService.instance;
    }
    ;
    constructor() {
        this._logs = [];
    }
    ;
    log(message) {
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
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigService {
    static instance;
    _config;
    constructor() {
        const cfg = dotenv_1.default.config();
        if (cfg.error) {
            throw new Error('Не найден файл .env');
        }
        if (!cfg.parsed) {
            throw new Error('Пустой файл .env');
        }
        this._config = cfg.parsed;
    }
    static getInstance() {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }
        return ConfigService.instance;
    }
    get(key) {
        const response = this._config[key];
        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }
        return response;
    }
    getNumber(key) {
        const value = Number(this._config[key]);
        if (isNaN(value)) {
            throw new Error('Это не число.');
        }
        return value;
    }
}
;
class Bot {
    constructor() { }
    run() {
        const config = ConfigService.getInstance();
        const token = config.get('BOT_TOKEN');
        const port = config.getNumber('PORT');
        console.log(`
            Токен: тип - ${typeof (token)}, значение - ${token}; 
            Порт: тип - ${typeof (port)}, значение - ${port};
        `);
    }
}
const app = new Bot();
app.run();
