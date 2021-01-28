
import './_Header.css'
import React from 'react'

import { GAME_ACTION } from '../Board/_gameReducer'

const { START, RESET_GAME } = GAME_ACTION

function Header({ gameState, dispatchGame }) {
return (
<>
    
    <div className='header_cont'>
        <h1 className='header_gameTitle'>Jank-Jank-Jejejank</h1>

        <div className='header_info'>
            Start Game / Player Turn / Winning Player
        </div>

    </div>

</>
)
}

export default Header
