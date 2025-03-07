import { Dynamic_Game_Object } from "../dynamic-game-object.js";

export class Player extends Dynamic_Game_Object {
    public width: number = 50;
    public height: number = 50;

    public constructor(x: number, y: number) {
        super(x, y, 2, 0, 0, 10, 10);
    }

    private _get_squish(): { width: number, height: number } {
        const width = this.width;
        const height = this.height;
        return { width, height };
    }

    public in(x: number, y: number): boolean {
        const in_x = x >= this.x && x <= this.x + this.width;
        const in_y = y <= this.y && y >= this.y - this.height;
        return in_x && in_y;
    }

    public draw(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No 2d context for canvas.");

        ctx.fillStyle = "green"; // Set the rectangle color

        const { width, height } = this._get_squish();
        ctx.fillRect(this.x, this.y, width, height);
    }
}
