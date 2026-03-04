// Lesson 7: Factory Method

/* 
Суть fabric method:
заключается в том, чтобы не реализовывать сложные структуры.
заранее прокладываем фундамент, что код будет расширяться
Фабрика -> simple fabric (так как у нас только if/else)
Если будет много условий, то используем классический метод factory
*/ 


// Реализация классического fabric method
interface ITransport {
    deliver(): void;
}

// можно так же вынести в отдельный файл 
class Truck implements ITransport {
    deliver(): void {
        console.log('Доставка на грузовкике')
    }
}

class Ship implements ITransport {
    deliver(): void {
        console.log('Доставка на корабле')
    }
}

class Air implements ITransport {
    deliver(): void {
        console.log('Доставка по воздуху')
    }
}

// реализация абстрактного создателя (можно вынести в отдельную директорию)
abstract class Logistics {
    // публичный метод для создания транспорта
    public abstract createTransport(): ITransport;

    public planDelivery() {
        const transport = this.createTransport();

        transport.deliver();
    }
}

// реализация Logistics
class RoadLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Ship();
    }
}

class AirLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Air();
    }
}

// реализация клиентского кода
// startApp -> работает с абстракцией (если появится новый способ доставки, то startApp не нужно менять)
const startApp = (logistics: Logistics) => {
    console.log('Начинаем планирование');

    logistics.planDelivery();
};

startApp(new RoadLogistics());
startApp(new SeaLogistics());
startApp(new AirLogistics());

/* применение для тг бота:
Ести разные типы входящего обновления -> сообщение, нажатие кнопки, оплата за звезды
*/

/*
Реализация simple fabric method (так как у нас всего if/else)
обработчик событий:
*/
 interface IHandler {
    handle(update: any): void;
}

// Классы
class MessageHandler implements IHandler {
    handle(update: any): void {
        console.log('Обрабатываю текст', update.message.text);
    }
}

class ButtonHandler implements IHandler {
    handle(update: any): void {
        console.log('Обрабатываю клик', update.callback_query.data);
    }
}

// Фабрика -> simple fabric (так как у нас только if/else)
// Если будет много условий, то используем классический метод factory
class HandlerFactory {
    static getHandler(update: any): IHandler {
        if (update.message) {
            return new MessageHandler();
        } else if (update.callback_query) {
            return new ButtonHandler();
        } else {
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
};