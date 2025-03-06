import { Scene } from "./scene.js";

export class Game_Loop {
    private _scene: Scene;

    public constructor(
        scene: Scene
    ) {
        this._scene = scene;
        const canvas = scene.get_canvas();
        document.body.appendChild(canvas);
    }

    public tick(elapsed_millis: number) {
        const canvas = this._scene.get_canvas();
        this._scene.clear_canvas();
        this._scene.get_grid().draw(canvas);
    }
}
