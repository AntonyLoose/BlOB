import { Game_Object } from "../game-object.js";
import { Grid, Scene } from "../scene.js";
import { State_Manager } from "../state/state-manager.js";

export class Dev_Scene implements Scene {
    private _canvas: HTMLCanvasElement;
    private _grid: Grid;
    private _res_sub: (res: { width: number, height: number }) => void;

    public constructor() {
        const res = State_Manager.resolution.read();
        this._grid = new Grid(
            3,
            3,
            res.width,
            res.height,
            res.height * 6
        )
        this._canvas = document.createElement("canvas");
        this._canvas.width = res.width;
        this._canvas.height = res.height;

        this._res_sub = (res) => {
            this._canvas.width = res.width;
            this._canvas.height = res.height;
        }
        State_Manager.resolution.sub(this._res_sub);
    }

    public get_canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    public clear_canvas() {
        const res = State_Manager.resolution.read();
        this._canvas.getContext("2d")?.clearRect(0, 0, res.width, res.height);
    }

    public get_grid(): Grid {
        return this._grid;
    }

    public get_objects(): Game_Object[] {
        return [];
    }

    public get_objects_in_view(): Game_Object[] {
        return [];
    }

    public clean_up() {
        State_Manager.resolution.unsub(this._res_sub);
    }
}
