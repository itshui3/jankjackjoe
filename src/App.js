

import './App.css';
import React, { useReducer, useEffect } from 'react'

import {
    initGame,
    ticReducer,

    START,
    PLACE,
    SET_WINNER,
    RESET,

    buildBorder,
    checkWinner,
} from './pieces'

const App = () => {

    const [tic, dispatchTic] = useReducer(ticReducer, initGame)

    useEffect(() => {
        const [win, winner] = checkWinner(tic.board)
        console.log('win', win, 'winner', winner)
        if (win) { 
            dispatchTic({ type: SET_WINNER, payload: winner })
        }
    }, [tic.board])

    const handleGameMechanic = () => {
        if(tic.state === 0) {
            // start game
            dispatchTic({ type: START })
        }

        if(tic.state > 2) {
            // reset game
            dispatchTic({ type: RESET })
        }
    }

return (
<>
<div className='content_wrapper'>
<div className='content_cont'>

<div className='header_cont'>
    <h1 className='header_title'>Tic Tac Toe</h1>
    <div className='header_info' onClick={handleGameMechanic}>
    {
        tic.state === 0
        ?
        'Click to Start Game'
        :
        tic.state === 1
        ?
        'Player 1\'s turn'
        :
        tic.state === 2
        ?
        'Player 2\'s turn'
        :
        tic.state === 5
        ?
        'Tie'
        :
        tic.state === 10
        ?
        'Player 1\'s Win'
        :
        tic.state === 20
        ?
        'Player 2\'s Win'
        :
        null
    }
    </div>
</div>

<div className='board_cont'>

{
tic.board.map((row, r_idx) => (
<div className='row' key={r_idx}>
    {
        row.map((cell, c_idx) => (
        <div className='cell' key={c_idx}
        style={buildBorder(r_idx, c_idx)}
        onClick={() => dispatchTic({ type: PLACE, payload: {coords: [r_idx, c_idx], player: tic.state} })}>
        {
        cell === 1
        ?
        'o'
        :
        cell === 2
        ?
        'x'
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

export default App;