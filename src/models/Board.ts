import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Bishop } from "./figures/Bishop"
import { King } from "./figures/King"
import { Knight } from "./figures/Knight"
import { Pawn } from "./figures/Pawn"
import { Queen } from "./figures/Queen"
import { Rook } from "./figures/Rook"

export class Board {
    cells: Cell[][] = []

    initCells() {
        const field = new Array(8).fill(new Array(8).fill(0))
        field.map((line: number[], i) => {
            const arr: Cell[] = []
            line.map((_: number, j) => {
                const color = (i + j) % 2 ? Colors.BLACK : Colors.WHITE
                arr.push( new Cell(this, j, i, color, null))
            })
            this.cells.push(arr)
        })
    }

    highLightCells(selectedCell:Cell | null) {
        this.cells.forEach((line:Cell[]) => {
            line.forEach(cell => {
                cell.available = !!selectedCell?.figure?.canMove(cell)
            })
        })
    }

    getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }


    getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    addFigures(){
        new Bishop(Colors.BLACK, this.getCell(2, 0))        
        new Bishop(Colors.BLACK, this.getCell(5, 0))        
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))

        new Knight(Colors.BLACK, this.getCell(1, 0))        
        new Knight(Colors.BLACK, this.getCell(6, 0))        
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))

        new Rook(Colors.BLACK, this.getCell(0, 0))        
        new Rook(Colors.BLACK, this.getCell(7, 0))        
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))

        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))

        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))

        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }
}
