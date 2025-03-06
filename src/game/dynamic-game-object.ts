import { Game_Object } from "./game-object.js"

export abstract class Dynamic_Game_Object extends Game_Object {
    public vy: number;
    public vx: number;
    public weight: number;
    public rigidity: number;

    public constructor(
        x: number,
        y: number,
        stickyness: number,
        vx: number,
        vy: number,
        weight: number,
        rigidity: number
    ) {
        super(x, y, stickyness);
        this.vx = vx;
        this.vy = vy;
        this.weight = weight;
        this.rigidity = rigidity;
    }
}
