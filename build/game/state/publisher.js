export class Publisher {
    constructor(init_value) {
        this._subscriptions = [];
        this._val = init_value;
    }
    pub(val) {
        this._subscriptions.forEach(sub => sub(val));
    }
    read() {
        return this._val;
    }
    sub(callback) {
        this._subscriptions.push(callback);
    }
    unsub(callback) {
        this._subscriptions.filter(sub => sub !== callback);
    }
    set_without_pub(val) {
        this._val = val;
    }
}
