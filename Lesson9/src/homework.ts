// Задание 1:
interface IDiscountStrategy {
    applyDiscount(amount: number): number
};

class NoDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`Применилась стратегия -> Без скидки`);
        return amount;
    }
};

class BlackFridayDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`Применилась стратегия -> Черная пятница 50%`);
        return amount * 0.5;
    };
};

class VipClientDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`Применилась стратегия -> Vip-клиент 20%`);
        return amount * 0.8;
    }
};

class Cart {
    constructor (private _strategy: IDiscountStrategy) {};

    public setStrategy(strategy: IDiscountStrategy) {
        this._strategy = strategy;
    }
    
    public checkout(amount: number) {
        const finalCost = this._strategy.applyDiscount(amount);
        console.log(`Сумма до: ${amount}, Сумма после применение стратегии: ${finalCost}`);
    }
};

console.log('Задание 1:')

const myCart = new Cart(new NoDiscount());
myCart.checkout(1000);

myCart.setStrategy(new BlackFridayDiscount());
myCart.checkout(1000);

myCart.setStrategy(new VipClientDiscount());
myCart.checkout(1000);
console.log();


// Задание 2:
interface ISubscriber {
    update(headline: string): void;
};

interface IPublisher {
    subscribe(observer: ISubscriber): void;
    unsubscribe(observer: ISubscriber): void;
    publishNews(headline: string): void;
}

class TelegramBotSubscriber implements ISubscriber {
    update(headline: string): void {
        console.log(`Рассылка в ТГ: ${headline}`);
    }
};

class WebsiteSubscriber implements ISubscriber {
    update(headline: string): void {
        console.log(`Обновление на сайте: ${headline}`);
    }
};

class NewsAgency implements IPublisher {
    private _subscribers: ISubscriber[] = [];

    public subscribe(observer: ISubscriber): void {
        this._subscribers.push(observer);
    };

    public unsubscribe(observer: ISubscriber): void {
        this._subscribers = this._subscribers.filter(sub => sub !== observer);
    };

    public publishNews(headline: string): void {
        for (const sub of this._subscribers) {
            sub.update(headline)
        }
    };
};

const myAgency = new NewsAgency();

const tgBot = new TelegramBotSubscriber();
const webSite = new WebsiteSubscriber();

for (const portal of [tgBot, webSite]) {
    myAgency.subscribe(portal);
};

console.log('Задание 2:');
myAgency.publishNews('Прогноз погоды на сегодня...');
myAgency.unsubscribe(tgBot);
myAgency.publishNews('В городе открылся новый парк...');
console.log();


// Задание 3:
import { EventEmitter } from "node:stream";

const eventBus = new EventEmitter();

const telegramBot = (headline: string) => {
    console.log(`Рассылка в ТГ: ${headline}`);
};

const website = (headline: string) => {
    console.log(`Обновление на сайте: ${headline}`);
};

eventBus.on('NEW_HEADLINE', telegramBot);
eventBus.on('NEW_HEADLINE', website);

class Agency {
    private _logs: string[] = [];

    public publishNews(headline: string) {
        this._logs.push(`Опубликована новость: ${headline}`);
        eventBus.emit('NEW_HEADLINE', headline)
    };

    public subscribe(observer: any) {
        eventBus.on('NEW_HEADLINE', observer);
    };

    public unsubscribe(observer: any) {
        eventBus.off('NEW_HEADLINE', observer);
    };

    public getLogs() {
        console.log('\nИстория логов: ')
        return this._logs;
    }
};

console.log('Задание 3:');

const newAgency = new Agency();

newAgency.publishNews('Прогноз погоды на сегодня...');
newAgency.unsubscribe(telegramBot);
newAgency.publishNews('Прогноз погоды на завтра...');

console.log(newAgency.getLogs());