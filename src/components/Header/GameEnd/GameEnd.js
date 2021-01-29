import React from 'react'

import Typewriter from 'typewriter-effect'

// gridState.winner && gridState.playerTurn
function GameEnd({dispatchResetGrid, winner}) {
return (
<>
    <Typewriter onInit={(typewriter) => {
        typewriter.start().changeDelay(100).changeDeleteSpeed(100)
        .deleteAll()
        .typeString(`Congratulations Player ${winner}! You win!`)
        
        .pauseFor(2000)

        .callFunction(dispatchResetGrid) 
    }}/>
</>
)
}

export default GameEnd
