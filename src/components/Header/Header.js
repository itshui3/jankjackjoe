
import './_Header.css'
import React, { useRef, useEffect } from 'react'

import Typewriter from 'typewriter-effect'

function Header({ turn, dispatchInitTurn, winner, dispatchResetGrid }) {
// when turn changes, useEffect should deleteAll() => paste playerTurn text

    const typeRef = useRef()

    useEffect(() => {
        console.log('in Header typeRef', typeRef)
        console.log('in Header turn', turn)

        // for some reason this isn't being called
        if (typeRef.current) {
            typeRef.current
            .pasteString(`Player ${turn}'s Turn`)
        }
        // [idea] we can loop '...', then stop this effect perhaps
    }, [turn])

    useEffect(() => {

        if (winner) {
            console.log('winner in Header: ', winner)
            dispatchInitTurn()
            // insert typewriter buffer with 'winner' interpolated
            dispatchResetGrid()
        }

    }, [winner])

return (
<>
<div className='header_cont'>
<h1 className='header_title'>Tic Tac Toe</h1>

<Typewriter 
onInit={(typewriter) => {

    // give react control of typewriter
    typeRef.current = typewriter

    typewriter.start()

    .pasteString('Game Starting')

    .typeString('...')
    .deleteChars(3)
    .typeString('...')
    .deleteChars(3)
    .typeString('...')
    .deleteChars(3)

    .changeDeleteSpeed(1)
    .deleteAll()

    .callFunction(
        // startGame logic
        () => dispatchInitTurn()
    )

}}
/>

</div>
</>
)
}

export default Header
