// Lesson 5: Методы SOLID

// Принцип SRP - единственной ответственности - S
class User {
    constructor(public name: string) {}
};

class UserRepository {
    save(user: User) {
        console.log(`Сохраняем нашего пользователя с именем ${user.name}`);
    }
};

class EmailService {
    sendWelcome(user: User) {
        console.log(`Отправлено на почту пользователю: ${user.name}`);
    }
};

const user = new User('Alex');
const emailService = new EmailService();
emailService.sendWelcome(user);


// Принцип Open/Closed - Открытости/закрытости - 0
type TSize = 'L' | 'XL' | 'S' | 'M';

interface IItem {
    color: string;
    size: TSize
}

interface ISpecification {
    isSatisfied(item: IItem): boolean;
}

class Color implements ISpecification {
    constructor(private color: string) {}

    isSatisfied(item: IItem): boolean {
        return item.color === this.color;
    }
}

class Size implements ISpecification {
    constructor(private size: TSize) {}

    isSatisfied(item: IItem): boolean {
        return item.size === this.size;
    }
}

class ProductFilter {
    filter(products: IItem[], spec: ISpecification) {
        return products.filter((product) => spec.isSatisfied(product));
    }
}

const cart = new ProductFilter();
const filteredCart = cart.filter([ { color: 'red', size: 'L' }, { color: 'green', size: 'XL' }, { color: 'red', size: 'S' } ], new Color('red'));
console.log(filteredCart);


// Принцип подстановки Барбары Лисков - LSP - L
class Bird {
    eat(nutrition: string) {}
};

class FlyingBird extends Bird {
    fly() { console.log('Лечу!')};
};

class NonFlyingBird extends Bird {
    notFly() {};
};

class Penguin extends NonFlyingBird {
    notFly(): void {
        console.log(`Я пингвин, я не летаю`)
    }
};


// Принцип разделения интерфейса - ISP - I
interface IPone { call(): void; }
interface IWebBrowser { browseInternet(): void; }
interface ICamera { takePhoto(): void; }

class Nokia3310 implements IPone {
    call(): void {
        
    }
};

class Samsung implements IPone, ICamera, IWebBrowser {
    call(): void {
        
    }
    browseInternet(): void {
        
    }
    takePhoto(): void {
        
    }
};

// Принцип инверсии (внедрении) зависимостей - DIP - D
interface ILogger {
    log(msg: string): void;
}

class ProductionLog implements ILogger {
    log(msg: string): void {
        console.log(`Production Log:`, msg);
    }
}

class TestLogger implements ILogger {
    log(msg: string): void {
        console.log('Test Log:', msg);
    }
}

class Bot {
    constructor(private logger: ILogger) {}

    onMessage(msg: string) {
        this.logger.log(msg);
    }
}

let bot: Bot;
if (process.env.PRODUCTION) {
    bot = new Bot(new ProductionLog());
} else {
    bot = new Bot(new TestLogger());
}

bot.onMessage('test');