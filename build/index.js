import { Game_Loop } from "./game/game-loop.js";
import { Dev_Scene } from "./game/scenes/dev-scene.js";
let elapsed_millis = 0;
let interval = 16.667; // Roughly 60fps
const scene = new Dev_Scene();
const game_loop = new Game_Loop(scene);
setInterval(() => {
    game_loop.tick(elapsed_millis);
    elapsed_millis += interval;
}, interval);
