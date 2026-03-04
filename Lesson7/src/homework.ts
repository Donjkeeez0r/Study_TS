interface IPaymentProcessor {
    pay(amount: number): void;
};

class PayPalProcessor implements IPaymentProcessor {
    pay(amount: number): void {
        console.log(`Оплата - ${amount}$ через PayPal (комиссия 5%)`);
    }
};

class StripeProcessor implements IPaymentProcessor {
    pay(amount: number): void {
        console.log(`Оплата - ${amount}$ через Stripe (комиссия 2%)`);
    }
};

abstract class PaymentGateway {
    public abstract createProcessor(): IPaymentProcessor;

    public processOrder(amount: number) {
        const processor = this.createProcessor();
        processor.pay(amount);
    }
};

class PayPalGateway extends PaymentGateway {
    public createProcessor(): IPaymentProcessor {
        return new PayPalProcessor()
    }
};

class StripeGateway extends PaymentGateway {
    public createProcessor(): IPaymentProcessor {
        return new StripeProcessor()
    }
};

const checkout = (gateway: PaymentGateway, amount: number) => {
    console.log('Начинаю проводить оплату...');
    gateway.processOrder(amount);
}

checkout(new PayPalGateway(), 100);
console.log();
checkout(new StripeGateway(), 200);

