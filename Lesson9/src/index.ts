// Lesson9:

// Паттерн Стратегия:
interface IRouteStrategy {
    buildRoute(start: string, end: string): void;
}

class DrivingStrategy implements IRouteStrategy {
    buildRoute(start: string, end: string): void {
        console.log(`Авто-маршрут от ${start} до ${end}`);
    }   
};

class WalkingStrategy implements IRouteStrategy {
    buildRoute(start: string, end: string): void {
        console.log(`Пешеходный маршрут от ${start} до ${end}`);
    }   
};

class NavigatorApp {
    constructor(private _strategy: IRouteStrategy) {}

    // метод для смены стратегии во время маршрута
    public setStrategy(strategy: IRouteStrategy) {
        this._strategy = strategy;
    };

    // реализация создания маршрута
    public route(start: string, end: string) {
        this._strategy.buildRoute(start, end);
    }
}

const myNavigator = new NavigatorApp(new DrivingStrategy());
myNavigator.route('Дом', 'Офис');

myNavigator.setStrategy(new WalkingStrategy());
myNavigator.route('Дом', 'Кафе');


// Паттерн Наблюдатель (основа микросервисов, фронт-енда)

// подписчик 
interface ISubscriber {
    update(eventName: string, data: any): void;
};

// IPublisher - emit() в EventEmitter, события
interface IPublisher {
    subscribe(observer: ISubscriber): void;
    unsubscribe(observer: ISubscriber): void;
    notify(eventName: string, data: any): void;
};

// Издатель
class UserAuthService implements IPublisher {
    // список всех подписчиков
    private _subscribers: ISubscriber[] = [];

    public subscribe(observer: ISubscriber): void {
        this._subscribers.push(observer);
    }

    public unsubscribe(observer: ISubscriber): void {
        this._subscribers = this._subscribers.filter((sub) => sub !== observer);
    }

    // рассылаем всем подписчикам 
    public notify(eventName: string, data: any): void {
        for (const sub of this._subscribers) {
            sub.update(eventName, data);
        }
    }

    public registerUser(username: string) {
        console.log(`Регистрирую пользователя: ${username}`);

        // Сохранение в БД

        this.notify('USER_REGISTERED', { username } );
    }
};

// Подписчик 1
class EmailService implements ISubscriber {
    update(eventName: string, data: any): void {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Отправляю письмо для: ${data.username}`);
        }
    }
};

// Подписчик 2
class BonusService implements ISubscriber {
    update(eventName: string, data: any): void {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Начисляю бонусы для: ${data.username}`);
        }
    }
};

// Подписчик 3
class LoggerService implements ISubscriber {
    update(eventName: string, data: any): void {
        console.log(`Событие: ${eventName} с данными: `, data);
    }
};

// собираем приложение
const authService = new UserAuthService();

// микро-сервисная архитектура
const emailServ = new EmailService();
const BonusServ = new BonusService();
const loggerServ = new LoggerService();


for (const service of [emailServ, BonusServ, loggerServ]) {
    authService.subscribe(service)
};

authService.registerUser('Alex');


//Паттерн наблюдателя в NodeJS:
import { EventEmitter } from "node:stream";

// доставщик событий
// const eventBus = new EventEmitter();

// eventBus.on('NEW_ORDER', (orderData) => {
//     console.log('Получен новый заказ!', orderData);
// });

// // вызываем это событие (оповещаем об ивенте)
// eventBus.emit('NEW_ORDER', { id: 1, amount: 500 });


// доставщик событий
const eventBus = new EventEmitter();

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
    private _logs: string[] = [];
    
    public create(id: number) {
        this._logs.push(`Создан ордер с айди: ${id}`);
        
        eventBus.emit('NEW_ORDER', { id });
    };

    public cancel(id: number) {
        this._logs.push(`Ордер с айди: ${id} отменен.`);
        eventBus.emit('CANCEL_ORDER', { id });
    };

    public getLogs() {
        return this._logs;
    };
};

const order = new Order();

order.create(432);
console.log(order.getLogs());

order.cancel(432);
console.log(order.getLogs());