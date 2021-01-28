
import './_Board.css'
import React, { useReducer, useEffect } from 'react'

import {
    Cross,
    Circle
} from './SVG'

/* mah SVGs: 
<Cross />
<Circle />
*/

import {
    initBoard,
    BOARD_ACTION,
    boardReducer
} from './_boardReducer'

import { GAME_ACTION } from './components/Board/_gameReducer'

const {
    NEXT_PLAYER,
    WINNER
} = GAME_ACTION

const { PLACE } = BOARD_ACTION

const cellBorder = (y, x) => ({
    borderBottom: y < 2 ? "1px solid black" : null,
    borderRight: x < 2 ? "1px solid black" : null,
})

function Board({ gameState, dispatchGame }) {

    const [boardState, dispatchBoard] = useReducer(boardReducer, initBoard)

    // check if game should end
    useEffect(() => {
        // determine if 1s or 2s have 3 in a row
        dispatchGame({
            type: NEXT_PLAYER,
            payload: { playerNum: gameState.turn === 1 ? 2 : 1 }
        })

    }, [boardState])

return (
<>

<div className='board_wrapper'>
<div className='board_cont'>

{

boardState.board.map((row, r_idx) => (
    <div className='row'
    key={r_idx}>  
    {
        row.map((cell, c_idx) => (
            <div className='cell'
            style={cellBorder(r_idx, c_idx)}
            key={c_idx}
            onClick={() => {

                dispatchBoard({ 
                    type: PLACE, 
                    payload: { playerNum: gameState.turn, coords: [r_idx, c_idx] }
                })

            }}
            >
            {
                cell === 1
                ?
                <Circle />
                :
                cell === 2
                ?
                <Cross />
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

export default Board
