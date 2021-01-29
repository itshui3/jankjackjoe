
import './App.css'
import React, { useEffect, useReducer, useState } from 'react'

import {
    Header,
    Body,
} from './components'

import {
    gridInit,
    gridReducer,
    GRID_ACTION,
} from './components/gridReducer'

import { determineWinner } from './components/determineWinner'

const { PLACE, TURN, RESETGRID, WINNER } = GRID_ACTION

function App() {

    const [gridState, gridDispatch] = useReducer(gridReducer, gridInit)

    useEffect(() => {

        // initGame at 'start'
        if (!gridState.winner && !gridState.playerTurn) {
        // yeah sure, but handle this in Header
        // gridDispatch({ type: TURN }) 
        }

        else if (gridState.winner && gridState.playerTurn) {
        // we handle this within Header
        }

        // check for winner whenever grid state changes
        gridDispatch({ type: WINNER, payload: determineWinner(gridState.grid) })

    }, [gridState])

return (
<>
{/* for formatting game object into the center */}
<div className='root_wrapper'>
{/* contains actual content, for all intents/purposes this can be treated as our root compo */}
<div className='content_cont'>

    <Header 
    // we rely on Header to dispatchTurn on: 
    // [0] gameStart - caused by init, called by typewriter init cb
    // [1] gameEnd - caused by validation passed in by useEffect on App.js level
    
    // header receives turn in order to type it to user
    dispatchInitTurn={() => gridDispatch({ type: TURN })}
    dispatchResetGrid={() => gridDispatch({ type: RESETGRID })}
    gridState={gridState}
    />

    <hr style={{
        width: '90%',
        opacity: '.5'
    }} />

    <Body 
    playerTurn={ gridState.playerTurn } 
    grid={ gridState.grid } 
    // dispatch place also sets to the next player's turn
    dispatchPlace={ (placeObj) => gridDispatch({ type: PLACE, payload: placeObj }) } />

</div>
</div>
</>
)
}

export default App
