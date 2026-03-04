"use strict";
// Lesson 7: Factory Method
Object.defineProperty(exports, "__esModule", { value: true });
// можно так же вынести в отдельный файл 
class Truck {
    deliver() {
        console.log('Доставка на грузовкике');
    }
}
class Ship {
    deliver() {
        console.log('Доставка на корабле');
    }
}
class Air {
    deliver() {
        console.log('Доставка по воздуху');
    }
}
// реализация абстрактного создателя (можно вынести в отдельную директорию)
class Logistics {
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}
// реализация Logistics
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}
class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}
class AirLogistics extends Logistics {
    createTransport() {
        return new Air();
    }
}
// реализация клиентского кода
// startApp -> работает с абстракцией (если появится новый способ доставки, то startApp не нужно менять)
const startApp = (logistics) => {
    console.log('Начинаем планирование');
    logistics.planDelivery();
};
startApp(new RoadLogistics());
startApp(new SeaLogistics());
startApp(new AirLogistics());
// Классы
class MessageHandler {
    handle(update) {
        console.log('Обрабатываю текст', update.message.text);
    }
}
class ButtonHandler {
    handle(update) {
        console.log('Обрабатываю клик', update.callback_query.data);
    }
}
// Фабрика -> simple fabric (так как у нас только if/else)
// Если будет много условий, то используем классический метод factory
class HandlerFactory {
    static getHandler(update) {
        if (update.message) {
            return new MessageHandler();
        }
        else if (update.callback_query) {
            return new ButtonHandler();
        }
        else {
            throw new Error('Неизвестный тип обновления');
        }
    }
}
const updates = [
    { message: { text: '/start' } },
    { callback_query: { data: 'buy_item' } }
];
for (const update of updates) {
    const handler = HandlerFactory.getHandler(update);
    handler.handle(update);
}
;
