
import './_Header.css'
import React from 'react'

import { GAME_ACTION } from '../Board/_gameReducer.js'

const { START, RESET_GAME } = GAME_ACTION

function Header({ gameState, dispatchGame }) {
return (
<>
    
    <div className='header_cont'>
        <h1 className='header_gameTitle'>Jank-Jank-Jejejank</h1>

        <div className='header_info'>
        {
            !gameState.turn && !gameState.winner
            ?
            <div className='info_text_btn'
            onClick={() => dispatchGame({ type: START })}>
                Start Game
            </div>
            :
            gameState.turn && !gameState.winner
            ?
            <div className='info_text_btn'>
                {`Player: ${gameState.turn}\'s Turn`}
            </div>
            :
            gameState.turn && gameState.winner
            ?
            <div className='info_text_btn'
            onClick={() => dispatchGame({ type: RESET_GAME })}>
                {`Player: ${gameState.winner} wins!`}
            </div>
            :
            null
        }
        </div>

    </div>

</>
)
}

export default Header
