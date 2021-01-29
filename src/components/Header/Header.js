
import './_Header.css'
import React, { useRef, useEffect } from 'react'

import Typewriter from 'typewriter-effect'

// import {
//     GRID_ACTION
// } from '../gridReducer'

// const { TURN } = GRID_ACTION

function Header({ turn, dispatchTurn, resetGrid, dispatchResetGrid }) {
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
        if (resetGrid) {
            // do typewriter thing, then reset
            dispatchResetGrid()
            dispatchTurn(turn)
        }
    }, [resetGrid])

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
        () => dispatchTurn(turn)
    )

}}
/>

</div>
</>
)
}

export default Header
