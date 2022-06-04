import {Cell} from "../models/Cell";
import {FC} from "react";
type PropsType = {
    cell: Cell
    selected: boolean
    click: (cell: Cell) => void
}

export const CellComponent: FC<PropsType> = ({cell, selected, click}) => {


    return (
        <div
            onClick = {() => click(cell)}
            className={['cell', cell.color, selected ? 'selected': ''].join(' ')}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.figure?.logo && <img src = {cell.figure.logo} alt={''}/>}
            {cell.available && !cell.figure && <div className="available"></div>}
        </div>
    )
}
