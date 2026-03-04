"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class PayPalProcessor {
    pay(amount) {
        console.log(`Оплата - ${amount}$ через PayPal (комиссия 5%)`);
    }
}
;
class StripeProcessor {
    pay(amount) {
        console.log(`Оплата - ${amount}$ через Stripe (комиссия 2%)`);
    }
}
;
class PaymentGateway {
    processOrder(amount) {
        const processor = this.createProcessor();
        processor.pay(amount);
    }
}
;
class PayPalGateway extends PaymentGateway {
    createProcessor() {
        return new PayPalProcessor();
    }
}
;
class StripeGateway extends PaymentGateway {
    createProcessor() {
        return new StripeProcessor();
    }
}
;
const checkout = (gateway, amount) => {
    console.log('Начинаю проводить оплату...');
    gateway.processOrder(amount);
};
checkout(new PayPalGateway(), 100);
console.log();
checkout(new StripeGateway(), 200);
