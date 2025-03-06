import { Dynamic_Game_Object } from "../dynamic-game-object.js";

export class Player extends Dynamic_Game_Object {
    public width: number = 50;
    public height: number = 50;

    public constructor(x: number, y: number) {
        super(x, y, 2, 0, 0, 10, 10);
    }

    public in(x: number, y: number): boolean {
        const in_x = x >= this.x && x <= this.x + this.width;
        const in_y = y <= this.y && y >= this.y - this.height;
        return in_x && in_y;
    }

    public draw(canvas: HTMLCanvasElement) {
        // TODO: draw a trail behind the player based on their vx and vy
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No 2d context for canvas.");
        ctx.fillStyle = "blue"; // Set the rectangle color
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
