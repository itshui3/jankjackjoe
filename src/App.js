
import './App.css'
import React, { useState, useReducer, useEffect } from 'react'

import {
    initGame,
    ACTION,
    ticReducer,

    Circle,
    Cross,
} from './stuff'

const { START, PLACE } = ACTION

function App() {

    const [tic, dispatchTic] = useReducer(ticReducer, initGame)

    useEffect(() => {
        console.log('tic.board', tic.board)
    }, [tic.board])

    const handleTileClick = (r_idx, t_idx) => {
        if (tic.state === 1 || tic.state === 2) {
            dispatchTic({ type: PLACE, payload: [r_idx, t_idx] })
        }
    }

    const handleGame = () => {
        if (!tic.state) { dispatchTic({ type: START }) }
    }

return (
<>
<div className='app_wrapper'>
<div className='app_cont'>

<div className='header_cont'
onClick={handleGame}>
    <h1 className='title'>Tic Tac Toe</h1>
    <div className='info'>
    {
        !tic.state ?
        'Click to Start Game'
        :
        tic.state === 1
        ?
        'Player 1 Turn'
        :
        tic.state === 2
        ?
        'Player 2 Turn'
        :
        tic.state === 10
        ?
        'Player 1 Win'
        :
        tic.state === 20
        ?
        'Player 2 Win'
        :
        null
    }
    </div>
</div>

<div className='body_cont'>
{
tic.board.map((row, r_idx) => (
    <div className='row' key={r_idx}>
    {
        row.map((tile, t_idx) => (
            <div className='tile' key={t_idx} 
            onClick={() => handleTileClick(r_idx, t_idx)}>
            {
                tile === 1 ?
                (<Circle />)
                : tile === 2 ?
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
</div>   
</>
)
}

export default App
/* tic tac toe - states
game start - p1 - p2 - p1win - p2win
0 - 1 - 2 - 10 - 20



*/