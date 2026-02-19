class AudioPlayer {
    private _volume: number;

    constructor (volume: number) {
        this._volume = volume;
    }

    public get volume(): number {
        return this._volume;
    }

    public set volume(v: number) {
        if (v < 0) {
            this._volume = 0;
        } else if (v > 100) {
            this._volume = 100;
        } else {
            this._volume = v;
        }
    };
};
const myPlayer = new AudioPlayer(1000);
console.log('Гроскость через AudioPlayer(): ' + myPlayer.volume)
myPlayer.volume = 1432;
console.log('Громкость через AudioPlayer.volume: ' + myPlayer.volume);
console.log();


class Cart {
    private _items: string[];

    constructor (items: string[]) {
        this._items = items;
    }

    public addItem(item: string) {
        this._items.push(item);
    }

    public get Items() {
        return this._items;
    }

    public clear() {
        this._items.splice(0);
    }
}

const firstCart = new Cart(['Car', 'PC', 'Sony']);
console.log(firstCart.Items);
firstCart.addItem('PlayStation');
console.log(firstCart.Items);
firstCart.clear();
console.log(firstCart.Items);
console.log();

const cart = new Cart(['TEST1', 'TEST2']);
cart.Items.push('test3');
console.log(cart.Items);

const cart2 = new Cart(['t1', 't2']);
console.log(cart2.Items);
cart2.Items.push('t3');
console.log(cart2.Items);
