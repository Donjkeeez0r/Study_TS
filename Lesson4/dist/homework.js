"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    recipient;
    constructor(recipient) {
        this.recipient = recipient;
    }
}
;
class EmailNotification extends Notification {
    send(message) {
        console.log(`Отправка Email на ${this.recipient}: ${message}`);
    }
}
;
class SmsNotification extends Notification {
    send(message) {
        if (message.length > 100) {
            console.log('Ошибка: SMS слишком длинное');
        }
        else {
            console.log(`Отправка SMS на ${this.recipient}: ${message}`);
        }
    }
}
;
const notifications = [
    new EmailNotification('test123@hotmail.com'),
    new SmsNotification('+12345656645')
];
for (const notif of notifications) {
    notif.send('Привет, это тест!');
}
;
console.log();
for (const item of notifications) {
    item.send('Привет, это мое второе сообщение! Как дела?');
}
;
