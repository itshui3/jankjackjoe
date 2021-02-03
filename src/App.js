
import produce from 'immer'
import './App.css'
import React, { useState, useEffect } from 'react'

import {
    Header
} from './components'

import {
    determinePhase,
    boardInit,
    rightBorder,
    bottomBorder,
    P,
} from './gamePieces'

/* P
'' - game not started
'1' - player 1's turn
'2' - player 2's turn
'Player 1' - game ended with player 1 winning
'Player 2' - game ended with player 2 winning
*/


function App() {

    const [phase, setPhase] = useState('')
    const [board, setBoard] = useState(boardInit)

    // useEffect(() => {
    //     // how do I determine if a move was actually made or not? 
    //     setPhase( determinePhase(board) )
    // }, [board])

    const buildTileBorder = (r_idx, t_idx) => {

        let borderConfig = {};

        if (r_idx < 2) { borderConfig = {...bottomBorder} }
        if (t_idx < 2) { borderConfig = {...borderConfig, ...rightBorder }}

        if (Object.keys(borderConfig)) { return borderConfig }
        else { return {} }
    }

    const handleStart = () => {
        const turn = String(Math.ceil( ( Math.random() * 2 ) ))
        setPhase(turn)
    }

    const attemptPlacement = (row, tile) => {
        // wrong phase
        if (!phase || phase === P.p1w || phase === P.p2w) { return }
        // tile taken
        if (board[row][tile]) { return }

        setBoard((board) => {
            return produce(board, draft => {
                draft[row][tile] = phase
                setPhase( determinePhase(draft, phase) )
            })
        })
    }

return (
<>
<div className='root_wrapper'>
<div className='content_cont'>

<Header 
handleStart={handleStart}
phase={phase}
/>
<div className='board_cont'>
    {
    board.map((row, r_idx) => (
    <div className='row' key={r_idx}>
        {
            row.map((tile, t_idx) => (
            <div className='tile' key={t_idx} 
            style={buildTileBorder(r_idx, t_idx)}
            onClick={() => attemptPlacement(r_idx, t_idx)}
            >
                
            {tile}

            </div>
            ))
        }
    </div>
    ))
    }
</div>

</div>
</div>

</>
)
}

export default App