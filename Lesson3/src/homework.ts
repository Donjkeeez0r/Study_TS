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

    public getItems() {
        const items = [...this._items];
        return items;
    }

    public clear() {
        this._items.splice(0);
    }
}

const firstCart = new Cart(['Tv', 'Phone', 'PC']);
console.log(`В моей корзине: ${firstCart.getItems()}`);
console.log(`Моя корзина после очистки: ${firstCart.clear()}`);
firstCart.addItem('Sony');
console.log(firstCart.getItems());