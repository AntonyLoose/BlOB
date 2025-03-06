import { Game_Object } from "./game-object.js";

export class Cell {
    public readonly _top_l_x: number;
    public readonly _top_l_y: number;
    public readonly _bot_r_x: number;
    public readonly _bot_r_y: number;

    public constructor(
        top_l_x: number,
        top_l_y: number,
        bot_r_x: number,
        bot_r_y: number
    ) {
        this._top_l_x = top_l_x;
        this._top_l_y = top_l_y;
        this._bot_r_x = bot_r_x;
        this._bot_r_y = bot_r_y;
    }
}

export class Grid {
    private _cells: Cell[] = [];

    public constructor(
        num_x_cells: number,
        num_y_cells: number,
        screen_width: number,
        screen_height: number,
        level_height: number
    ) {
        const width = screen_width / num_x_cells;
        const height = screen_height / num_y_cells;

        for (let y = 0; y < level_height; y += height) {
            for (let x = 0; x < screen_width; x += width) {
                const cell = new Cell(
                    x,
                    y + height,
                    x + width,
                    y
                );
                this._cells.push(cell);
            }
        }
    }

    /*
    * This method is just for visualising the grid.
    */
    public draw(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.strokeStyle = "red"; // Set grid line color
        ctx.lineWidth = 1;

        for (const cell of this._cells) {
            ctx.strokeRect(
                cell._top_l_x,
                cell._top_l_y,
                cell._bot_r_x - cell._top_l_x,
                cell._bot_r_y - cell._top_l_y
            );
        }
    }
}

export interface Scene {
    get_canvas: () => HTMLCanvasElement;
    clear_canvas: () => void;
    get_grid: () => Grid;
    get_objects: () => Game_Object[];
    get_objects_in_view: (y: number) => Game_Object[];
    clean_up: () => void;
}
