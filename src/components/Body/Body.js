
import './_Body.css'
import React, { useEffect } from 'react'

import { buildCellBorder } from './buildCellBorder'

function Body({ grid, playerTurn, dispatchPlace }) {

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
                {cell}
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
