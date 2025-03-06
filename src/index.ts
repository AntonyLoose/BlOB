import { Game_Loop } from "./game/game-loop.js";
import { Player } from "./game/objects/player.js";
import { Dev_Scene } from "./game/scenes/dev-scene.js";

let elapsed_millis = 0;
let interval = 16.667; // Roughly 60fps
const scene = new Dev_Scene();
const player = new Player(200, 200);
const game_loop = new Game_Loop(scene, player);

setInterval(() => {
    game_loop.tick(elapsed_millis);
    elapsed_millis += interval;
}, interval);
