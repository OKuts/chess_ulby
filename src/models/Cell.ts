import {Figure} from "./Figure";
import {Colors} from "./Colors";
import {Board} from "./Board";

export class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    available: boolean
    id: string

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.available = false
        this.id = x + '' + y
        this.board = board
    }
}
