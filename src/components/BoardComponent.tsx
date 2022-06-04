import {CellComponent} from "./CellComponent";
import {Board} from "../models/Board";
import {FC} from "react";
import React from "react";
import {Cell} from "../models/Cell";

interface PropsType {
    board: Board
    setBoard: (board: Board) => void
}

export const BoardComponent: FC<PropsType> = ({board, setBoard}) => {
    return (
        <div className={'board'}>
            {board.cells.map((line, i) =>
                <React.Fragment key={i}>
                    {line.map((cell: Cell) =>
                        <CellComponent
                            // key = {cell.id}
                            cell={cell}
                            // click = {click}
                            // selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />)}
                </React.Fragment>
            )}
        </div>
    )
}
