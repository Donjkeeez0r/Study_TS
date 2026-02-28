"use strict";
// Lesson 6
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Singleton: принцип - создаем один конструктор, один экземпляр
// где применять - БД, конфиг файл
3;
// class Database {
//     private static instance: Database;
//     private constructor() {
//         console.log('Подключение к базе данных установлено!');
//     }
//     // публичный метод доступа
//     public static getInstance(): Database {
//         // проверка (обращаемся через название класса к стат. методам)
//         // если экземпляр нет, то создаем его
//         if (!Database.instance) {
//             // внутри класса создаем экземпляр класса
//             Database.instance = new Database();
//             console.log('Подключение создано');
//         } else {
//             console.log('Подключение уже создано')
//         }
//         // если есть, возвращаем его
//         return Database.instance;
//     }
//     // метод для запроса (не статический, а публичным от класса)
//     public query(sql: string) {
//         console.log(`Выполняю запрос: ${sql}`);
//     }
// }
// // создание экземпляра
// const db = Database.getInstance();
// const db2 = Database.getInstance();
// импорт из dotenv библиотек
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigService {
    // статическое поле c типом -> класс 
    // (чтобы могли обращаться без создания новогоэкземпляра класса)
    static instance;
    // поле для распаршенного файла .env
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
}
class Bot {
    constructor() { }
    run() {
        const config = ConfigService.getInstance();
        const token = config.get('BOT_TOKEN');
        const port = config.get('PORT');
        console.log(`Запускаю бота на порту ${port} с токеном ${token}`);
    }
}
const app = new Bot();
app.run();
