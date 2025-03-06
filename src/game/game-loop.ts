import { Player } from "./objects/player.js";
import { Scene } from "./scene.js";

export class Game_Loop {
    private _scene: Scene;
    private _player: Player;

    public constructor(
        scene: Scene,
        player: Player
    ) {
        this._player = player;
        this._scene = scene;
        const canvas = scene.get_canvas();
        document.body.appendChild(canvas);
    }

    public tick(elapsed_millis: number) {
        const canvas = this._scene.get_canvas();
        this._scene.clear_canvas();
        this._player.vx -= 0.001;
        this._player.x += this._player.vx;
        this._player.draw(canvas);
    }
}
