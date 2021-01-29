
import './_Header.css'
import React, { useEffect, useState, useRef } from 'react'

import Typewriter from 'typewriter-effect'

import GameEnd from './GameEnd/GameEnd'
import GameStart from './GameStart/GameStart'
import PlayerTurn1 from './PlayerTurn1/PlayerTurn1'
import PlayerTurn2 from './PlayerTurn2/PlayerTurn2'

function Header({
    gridState,
    // turn, 
    dispatchInitTurn, 
    // winner, 
    dispatchResetGrid, 
    // dispatchResetTurn, 
}) { 
// when turn changes, useEffect should deleteAll() => paste playerTurn text

return (
<>
<div className='header_cont'>
<h1 className='header_title'>Tic Tac Toe</h1>

{/* 
// HoF API
// [0] - Start Game, with the dots
// [chains into dispatchInitTurn]
// [1] - When there's a winner
// [chains into dispatchResetTurn && dispatchResetGrid() && dispatchInitTurn()]
// [2] - When turns change [no need to affect state]

// !gridState.winner && gridState.playerTurn === 1
// express playerTurn 1

// !gridState.winner && gridState.playerTurn === 2
// express playerTurn 2

// !gridState.winner && !gridState.playerTurn
// express gameStart [therefore dispatch startGame]

// gridState.winner && gridState.playerTurn
// express winner [therefore dispatch resetGame]
 */}

{
    gridState.winner && gridState.playerTurn
    ?
    (<GameEnd winner={gridState.winner} dispatchResetGrid={dispatchResetGrid} />)
    :
    !gridState.winner && !gridState.playerTurn
    ?
    (<GameStart dispatchInitTurn={dispatchInitTurn} />)
    :
    !gridState.winner && gridState.playerTurn === 1
    ?
    (<PlayerTurn1 playerTurn={gridState.playerTurn} />)
    :
    !gridState.winner && gridState.playerTurn === 2
    ?
    (<PlayerTurn2 playerTurn={gridState.playerTurn} />)
    :
    null
}

</div>
</>
)
}

export default Header
