import React from 'react'

import Typewriter from 'typewriter-effect'

// !gridState.winner && !gridState.playerTurn
function GameStart({ dispatchInitTurn }) {
return (
<>
    <Typewriter onInit={(typewriter) => {
        typewriter.start().changeDeleteSpeed(1).changeDelay(100)
        .deleteAll()
        .typeString('Loading Game')
    
        .typeString('...')
        .deleteChars(3)
    
        .typeString('...')
        .deleteChars(3)
    
        .callFunction(dispatchInitTurn)
    }}/>
</>
)
}

export default GameStart
