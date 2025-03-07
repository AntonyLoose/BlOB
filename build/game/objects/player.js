import { Dynamic_Game_Object } from "../dynamic-game-object.js";
export class Player extends Dynamic_Game_Object {
    constructor(x, y) {
        super(x, y, 2, 0, 0, 10, 10);
        this.width = 50;
        this.height = 50;
    }
    _get_squish() {
        const width = this.width;
        const height = this.height;
        return { width, height };
    }
    in(x, y) {
        const in_x = x >= this.x && x <= this.x + this.width;
        const in_y = y <= this.y && y >= this.y - this.height;
        return in_x && in_y;
    }
    draw(canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            throw new Error("No 2d context for canvas.");
        ctx.fillStyle = "green"; // Set the rectangle color
        const { width, height } = this._get_squish();
        ctx.fillRect(this.x, this.y, width, height);
    }
}
