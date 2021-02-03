

import './_header.css'
import React from 'react'

function Header({ phase, handleStart, reset, P }) {

return (

<>
<div className='header_cont'
onClick={() => {
    if (phase === P.p1w || phase === P.p2w) { reset() }
}}>
    <h1 className='header_title'>Tic Tac Toe</h1>
    <h2 className='header_phase'
    onClick={() => { 
        if (!phase) { handleStart() } 
    }}
    >{  !phase
        ?
        'Start Game'
        :
        phase === '1'
        ?
        'Player 1\'s Turn...'
        :
        phase === '2'
        ?
        'Player 2\'s Turn...'
        :
        phase + ' Wins!' }</h2>
</div>
</>

)
}

export default Header
