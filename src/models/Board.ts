import {Cell} from "./Cell";
import {Colors} from "./Colors";

export class Board {
    cells: Cell[][] = []

    initCells() {
        const field = new Array(8).fill(new Array(8).fill(0))
        field.map((line: number[], i) => {
            const arr: Cell[] = []
            line.map((_: number, j) => {
                const color = (i + j) % 2 ? Colors.BLACK : Colors.WHITE
                arr.push( new Cell(this, i, j, color, null))
            })
            this.cells.push(arr)
        })
    }
}
