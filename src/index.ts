import { Game_Loop } from "./game/game-loop.js";
import { Dev_Scene } from "./game/scenes/dev-scene.js";

let elapsed_millis = 0;
let interval = 16.667; // Roughly 60fps
const game_loop = new Game_Loop();
const scene = new Dev_Scene();
const canvas = scene.get_canvas();
document.body.appendChild(canvas);

setInterval(() => {
    game_loop.tick(elapsed_millis);
    elapsed_millis += interval;
    scene.clear_canvas();
    scene.get_grid().draw(canvas);
}, interval);
