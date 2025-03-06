import { Grid } from "../scene.js";
import { State_Manager } from "../state/state-manager.js";
export class Dev_Scene {
    constructor() {
        const res = State_Manager.resolution.read();
        this._grid = new Grid(4, 4, res.width, res.height, res.height * 6);
        this._canvas = document.createElement("canvas");
        this._canvas.width = res.width;
        this._canvas.height = res.height;
        this._res_sub = (res) => {
            this._canvas.width = res.width;
            this._canvas.height = res.height;
        };
        State_Manager.resolution.sub(this._res_sub);
    }
    get_canvas() {
        return this._canvas;
    }
    clear_canvas() {
        var _a;
        const res = State_Manager.resolution.read();
        (_a = this._canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, res.width, res.height);
    }
    get_grid() {
        return this._grid;
    }
    get_objects() {
        return [];
    }
    get_objects_in_view() {
        return [];
    }
    clean_up() {
        State_Manager.resolution.unsub(this._res_sub);
    }
}
