// плохой код
class OrderSystem {
    processOrder(orderId: number, paymentType: string) {
        // Проверка наличия товара
        console.log('Checking inventory...');

        // Оплата
        if (paymentType === 'card') {
            console.log('Charging credit card...');
        } else if (paymentType === 'paypal') {
            console.log('Redirecting to PayPal...');
        }

        // Отправка уведомления
        console.log('Sending email to user...');
    }
}

// Исправленный
class InventoryService {
    check() { console.log('Checking inventory...'); }
}

class NotificationService {
    send() { console.log('Sending email...'); }
}

interface IPaymentProcessor {
    pay(): void;
}

class CardPayment implements IPaymentProcessor {
    pay(): void {
        console.log('Charging credit card...');
    }
}

class PayPalPayment implements IPaymentProcessor {
    pay(): void {
        console.log('Redirecting to PayPal...');
    }
}

class OrderHandler {
    constructor(
        private inventory: InventoryService,
        private notification: NotificationService,
        private processor: IPaymentProcessor
    ) {}

    handleOrder(orderId: number) {
        this.inventory.check();
        this.processor.pay();
        this.notification.send();
    }
}

const orderWithCard = new OrderHandler(
    new InventoryService(),
    new NotificationService(),
    new CardPayment()
);
orderWithCard.handleOrder(1);

const orderWithPaypal = new OrderHandler(
    new InventoryService(),
    new NotificationService(),
    new PayPalPayment()
);
orderWithPaypal.handleOrder(2);