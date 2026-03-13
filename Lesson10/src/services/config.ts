// импорт из dotenv библиотек
import dotenv from 'dotenv';

export class ConfigService {
    // статическое поле c типом -> класс 
    // (чтобы могли обращаться без создания новогоэкземпляра класса)
    private static instance: ConfigService;

    // поле для распаршенного файла .env
    private _config: dotenv.DotenvParseOutput;

    public constructor() {
        const cfg = dotenv.config();

        if (cfg.error) {
            throw new Error('Не найден файл .env');
        }

        if (!cfg.parsed) {
            throw new Error('Пустой файл .env');
        }

        this._config = cfg.parsed;
    }

    public get(key: string): string {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }

        return response;
    }
}