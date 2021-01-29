import React from 'react'

import Typewriter from 'typewriter-effect'

// !gridState.winner && gridState.playerTurn === 1
// !gridState.winner && gridState.playerTurn === 2
function PlayerTurn({playerTurn}) {
    React.useEffect(() => {
        console.log('playerTurn', playerTurn)
    }, [playerTurn])
return (
<>
    <Typewriter onInit={(typewriter) => {
        typewriter.start()
        .deleteAll()
        
        .typeString(`Player ${playerTurn}\'s Turn`) 
    }}/>

</>
)
}

export default PlayerTurn
