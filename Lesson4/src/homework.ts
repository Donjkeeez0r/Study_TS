abstract class Notification {
    constructor(protected recipient: string) {}
    
    abstract send(message: string): void 
};

class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Отправка Email на ${this.recipient}: ${message}`);
    }
};

class SmsNotification extends Notification {
    send(message: string): void {
        if (message.length > 100) {
            console.log('Ошибка: SMS слишком длинное');
        } else {
            console.log(`Отправка SMS на ${this.recipient}: ${message}`);
        }
    }
};

const notifications: Notification[] = [
    new EmailNotification('test123@hotmail.com'),
    new SmsNotification('+12345656645')
];

for (const notif of notifications) {
    notif.send('Привет, это тест!');
};
console.log();

for (const item of notifications) {
    item.send('Привет, это мое второе сообщение! Как дела?')
};
