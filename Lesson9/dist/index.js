"use strict";
// Lesson9:
Object.defineProperty(exports, "__esModule", { value: true });
class DrivingStrategy {
    buildRoute(start, end) {
        console.log(`Авто-маршрут от ${start} до ${end}`);
    }
}
;
class WalkingStrategy {
    buildRoute(start, end) {
        console.log(`Пешеходный маршрут от ${start} до ${end}`);
    }
}
;
class NavigatorApp {
    _strategy;
    constructor(_strategy) {
        this._strategy = _strategy;
    }
    // метод для смены стратегии во время маршрута
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    ;
    // реализация создания маршрута
    route(start, end) {
        this._strategy.buildRoute(start, end);
    }
}
const myNavigator = new NavigatorApp(new DrivingStrategy());
myNavigator.route('Дом', 'Офис');
myNavigator.setStrategy(new WalkingStrategy());
myNavigator.route('Дом', 'Кафе');
;
;
// Издатель
class UserAuthService {
    // список всех подписчиков
    _subscribers = [];
    subscribe(observer) {
        this._subscribers.push(observer);
    }
    unsubscribe(observer) {
        this._subscribers = this._subscribers.filter((sub) => sub !== observer);
    }
    // рассылаем всем подписчикам 
    notify(eventName, data) {
        for (const sub of this._subscribers) {
            sub.update(eventName, data);
        }
    }
    registerUser(username) {
        console.log(`Регистрирую пользователя: ${username}`);
        // Сохранение в БД
        this.notify('USER_REGISTERED', { username });
    }
}
;
// Подписчик 1
class EmailService {
    update(eventName, data) {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Отправляю письмо для: ${data.username}`);
        }
    }
}
;
// Подписчик 2
class BonusService {
    update(eventName, data) {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Начисляю бонусы для: ${data.username}`);
        }
    }
}
;
// Подписчик 3
class LoggerService {
    update(eventName, data) {
        console.log(`Событие: ${eventName} с данными: `, data);
    }
}
;
// собираем приложение
const authService = new UserAuthService();
// микро-сервисная архитектура
const emailServ = new EmailService();
const BonusServ = new BonusService();
const loggerServ = new LoggerService();
for (const service of [emailServ, BonusServ, loggerServ]) {
    authService.subscribe(service);
}
;
authService.registerUser('Alex');
//Паттерн наблюдателя в NodeJS:
const node_stream_1 = require("node:stream");
// доставщик событий
// const eventBus = new EventEmitter();
// eventBus.on('NEW_ORDER', (orderData) => {
//     console.log('Получен новый заказ!', orderData);
// });
// // вызываем это событие (оповещаем об ивенте)
// eventBus.emit('NEW_ORDER', { id: 1, amount: 500 });
// доставщик событий
const eventBus = new node_stream_1.EventEmitter();
// привязка к событиям
eventBus.on('NEW_ORDER', (obj) => {
    // записываем ордер в БД
    // ...
    console.log('Получили ордер с данными: ', obj);
});
eventBus.on('CANCEL_ORDER', (obj) => {
    // записываем ордер в БД
    // ...
    console.log('Ордер отменили с данными: ', obj);
});
class Order {
    _logs = [];
    create(id) {
        this._logs.push(`Создан ордер с айди: ${id}`);
        eventBus.emit('NEW_ORDER', { id });
    }
    ;
    cancel(id) {
        this._logs.push(`Ордер с айди: ${id} отменен.`);
        eventBus.emit('CANCEL_ORDER', { id });
    }
    ;
    getLogs() {
        return this._logs;
    }
    ;
}
;
const order = new Order();
order.create(432);
console.log(order.getLogs());
order.cancel(432);
console.log(order.getLogs());
