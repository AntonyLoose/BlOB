export class Game_Loop {
    constructor(scene, player) {
        this._player = player;
        this._scene = scene;
        const canvas = scene.get_canvas();
        document.body.appendChild(canvas);
    }
    tick(elapsed_millis) {
        const canvas = this._scene.get_canvas();
        this._scene.clear_canvas();
        this._player.vx -= 0.001;
        this._player.x += this._player.vx;
        this._player.draw(canvas);
    }
}
