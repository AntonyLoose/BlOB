export abstract class Game_Object {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
    * This method should calculate the bounds of this object and check if the provided
    * coordinates are inside this object.
    */
    public abstract in(x: number, y: number): boolean;
    public abstract draw(canvas: HTMLCanvasElement): void;
}
