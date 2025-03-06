import { Game_Loop } from "./game/game-loop.js";
let elapsed_millis = 0;
let interval = 16.667; // Roughly 60fps
const game_loop = new Game_Loop();
setInterval(() => {
    game_loop.tick(elapsed_millis);
    elapsed_millis += interval;
}, interval);
