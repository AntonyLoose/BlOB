export class Cell {
    constructor(top_l_x, top_l_y, bot_r_x, bot_r_y) {
        this._top_l_x = top_l_x;
        this._top_l_y = top_l_y;
        this._bot_r_x = bot_r_x;
        this._bot_r_y = bot_r_y;
    }
}
export class Grid {
    constructor(num_x_cells, num_y_cells, screen_width, screen_height, level_height) {
        this._cells = [];
        const width = screen_width / num_x_cells;
        const height = screen_height / num_y_cells;
        for (let y = 0; y < level_height; y += height) {
            for (let x = 0; x < screen_width; x += width) {
                const cell = new Cell(x, y + height, x + width, y);
                this._cells.push(cell);
            }
        }
    }
    /*
    * This method is just for visualising the grid.
    */
    draw(canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        ctx.strokeStyle = "red"; // Set grid line color
        ctx.lineWidth = 1;
        for (const cell of this._cells) {
            ctx.strokeRect(cell._top_l_x, cell._top_l_y, cell._bot_r_x - cell._top_l_x, cell._bot_r_y - cell._top_l_y);
        }
    }
}
