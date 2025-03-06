export class Publisher<T> {
    private _val: T;
    private _subscriptions: ((val: T) => void)[] = [];

    public constructor(init_value: T) {
        this._val = init_value;
    }

    public pub(val: T) {
        this._subscriptions.forEach(sub => sub(val));
    }

    public read(): T {
        return this._val;
    }

    public sub(callback: (val: T) => void) {
        this._subscriptions.push(callback);
    }

    public unsub(callback: (val: T) => void) {
        this._subscriptions.filter(sub => sub !== callback);
    }

    public set_without_pub(val: T) {
        this._val = val;
    }
}
