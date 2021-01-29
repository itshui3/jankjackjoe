
import './_Body.css'
import React, { useEffect } from 'react'

import {
    Cross,
    Circle
} from './SVG'

import { buildCellBorder } from './buildCellBorder'

function Body({ playerTurn, grid, dispatchPlace }) {

return (
<>
<div className='body_wrapper'>
<div className='body_cont'>
{
grid.map((row, r_idx) => (
<div className='row' key={r_idx}>
    {
        row.map((cell, c_idx) => (
            <div className='cell' key={c_idx}
            style={ buildCellBorder([r_idx, c_idx]) }

            onClick={() => dispatchPlace({ coords:[r_idx, c_idx], playerTurn: playerTurn })}
            >
            {
                cell === 1 ?
                (<Circle />)
                : cell === 2 ?
                (<Cross />) 
                :
                null
            }
            </div>
        ))
    }
</div>
))
}
</div>
</div>
</>
)
}

export default Body
