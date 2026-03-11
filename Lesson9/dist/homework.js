"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class NoDiscount {
    applyDiscount(amount) {
        console.log(`Применилась стратегия -> Без скидки`);
        return amount;
    }
}
;
class BlackFridayDiscount {
    applyDiscount(amount) {
        console.log(`Применилась стратегия -> Черная пятница 50%`);
        return amount * 0.5;
    }
    ;
}
;
class VipClientDiscount {
    applyDiscount(amount) {
        console.log(`Применилась стратегия -> Vip-клиент 20%`);
        return amount * 0.8;
    }
}
;
class Cart {
    _strategy;
    constructor(_strategy) {
        this._strategy = _strategy;
    }
    ;
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    checkout(amount) {
        const finalCost = this._strategy.applyDiscount(amount);
        console.log(`Сумма до: ${amount}, Сумма после применение стратегии: ${finalCost}`);
    }
}
;
console.log('Задание 1:');
const myCart = new Cart(new NoDiscount());
myCart.checkout(1000);
myCart.setStrategy(new BlackFridayDiscount());
myCart.checkout(1000);
myCart.setStrategy(new VipClientDiscount());
myCart.checkout(1000);
console.log();
;
class TelegramBotSubscriber {
    update(headline) {
        console.log(`Рассылка в ТГ: ${headline}`);
    }
}
;
class WebsiteSubscriber {
    update(headline) {
        console.log(`Обновление на сайте: ${headline}`);
    }
}
;
class NewsAgency {
    _subscribers = [];
    subscribe(observer) {
        this._subscribers.push(observer);
    }
    ;
    unsubscribe(observer) {
        this._subscribers = this._subscribers.filter(sub => sub !== observer);
    }
    ;
    publishNews(headline) {
        for (const sub of this._subscribers) {
            sub.update(headline);
        }
    }
    ;
}
;
const myAgency = new NewsAgency();
const tgBot = new TelegramBotSubscriber();
const webSite = new WebsiteSubscriber();
for (const portal of [tgBot, webSite]) {
    myAgency.subscribe(portal);
}
;
console.log('Задание 2:');
myAgency.publishNews('Прогноз погоды на сегодня...');
myAgency.unsubscribe(tgBot);
myAgency.publishNews('В городе открылся новый парк...');
console.log();
// Задание 3:
const node_stream_1 = require("node:stream");
const eventBus = new node_stream_1.EventEmitter();
const telegramBot = (headline) => {
    console.log(`Рассылка в ТГ: ${headline}`);
};
const website = (headline) => {
    console.log(`Обновление на сайте: ${headline}`);
};
eventBus.on('NEW_HEADLINE', telegramBot);
eventBus.on('NEW_HEADLINE', website);
class Agency {
    _logs = [];
    publishNews(headline) {
        this._logs.push(`Опубликована новость: ${headline}`);
        eventBus.emit('NEW_HEADLINE', headline);
    }
    ;
    subscribe(observer) {
        eventBus.on('NEW_HEADLINE', observer);
    }
    ;
    unsubscribe(observer) {
        eventBus.off('NEW_HEADLINE', observer);
    }
    ;
    getLogs() {
        console.log('\nИстория логов: ');
        return this._logs;
    }
}
;
console.log('Задание 3:');
const newAgency = new Agency();
newAgency.publishNews('Прогноз погоды на сегодня...');
newAgency.unsubscribe(telegramBot);
newAgency.publishNews('Прогноз погоды на завтра...');
console.log(newAgency.getLogs());
