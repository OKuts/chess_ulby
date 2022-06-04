import {CellComponent} from "./CellComponent";
import {Board} from "../models/Board";
import {FC, useEffect, useState} from "react";
import React from "react";
import {Cell} from "../models/Cell";

interface PropsType {
    board: Board
    setBoard: (board: Board) => void
}



export const BoardComponent: FC<PropsType> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const click = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            cell.figure && setSelectedCell(cell)
        }
    }
    
    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard);
    }

    const highLightCells = () => {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    useEffect(() => {
        highLightCells()
    }, [selectedCell])


    return (
        <div className={'board'}>
            {board.cells.map((line, i) =>
                <React.Fragment key={i}>
                    {line.map((cell: Cell) =>
                        <CellComponent
                            key = {cell.id}
                            cell={cell}
                            click = {click}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />)}
                </React.Fragment>
            )}
        </div>
    )
}
