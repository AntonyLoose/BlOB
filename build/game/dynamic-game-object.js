import { Game_Object } from "./game-object.js";
export class Dynamic_Game_Object extends Game_Object {
    constructor(x, y, stickyness, vx, vy, weight, rigidity) {
        super(x, y, stickyness);
        this.vx = vx;
        this.vy = vy;
        this.weight = weight;
        this.rigidity = rigidity;
    }
}
