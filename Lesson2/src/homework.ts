type levelDev = 'junior' | 'middle' | 'senior';

interface Developer {
    level: levelDev;
    login: string;
    skills: string[];
    isLookingForJob?: boolean;
};

const firstDev: Developer = {
    level: 'junior',
    login: 'qwerty123',
    skills: ['JS', 'TS', 'HTML', 'CSS'],
    isLookingForJob: true,
};

const secondDev: Developer = {
    level: 'middle',
    login: 'FghgACV12@!',
    skills: ['JS', 'TS', 'Docker']
};


interface IProduct {
    id: number,
    price: number,
    title: string,
};

interface ICartEntry {
    product: IProduct,
    quantity: number,
};

const calculateTotal = (cart: ICartEntry[]): number => {
    let total = 0;
    
    for (const item of cart) {
        total += item.product.price * item.quantity;
    }

    return total;
};

const testCart1: ICartEntry[] = [
    {
        product: { id: 1, price: 100, title: 'Phone' },
        quantity: 2
    },
    {
        product: { id: 2, price: 345, title: 'PC' },
        quantity: 1
    },
];

const testCart2: ICartEntry[] = [
    {
        product: { id: 3, price: 1643, title: 'MacBook' },
        quantity: 2
    },
    {
        product: { id: 4, price: 1623, title: 'Car' },
        quantity: 1
    },
];
console.log(calculateTotal(testCart1));
console.log(calculateTotal(testCart2));