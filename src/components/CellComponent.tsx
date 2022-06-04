import {Cell} from "../models/Cell";
import {FC} from "react";
type PropsType = {
    cell: Cell
    // selected: boolean
    // click: (cell: Cell) => void
}

export const CellComponent: FC<PropsType> = ({cell}) => {


    return (
        <div
            className={['cell', cell.color].join(' ')}
        >
            hello3
        </div>
    )
}
