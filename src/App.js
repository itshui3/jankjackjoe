
import './App.css'
import React, { useEffect, useReducer, useState } from 'react'

import {
    Header,
    Body
} from './components'

import {
    gridInit,
    gridReducer,
    GRID_ACTION
} from './components/gridReducer'

import { determineWinner } from './components/determineWinner'

const { PLACE, TURN, RESET } = GRID_ACTION

function App() {

    const [gridState, gridDispatch] = useReducer(gridReducer, gridInit)
    const [resetGrid, setResetGrid] = useState(0)

    useEffect(() => {

        setResetGrid( determineWinner(resetGrid) )

    }, [gridState.grid])

return (
<>
{/* for formatting game object into the center */}
<div className='root_wrapper'>
{/* contains actual content, for all intents/purposes this can be treated as our root compo */}
<div className='content_cont'>

    <Header 
    turn={ gridState.playerTurn } 
    dispatchTurn={ (nextPlayer) => gridDispatch({ type: TURN, payload: nextPlayer })} 
    dispatchResetGrid={() => gridDispatch({ type: RESET })} />

    <Body 
    playerTurn={ gridState.playerTurn } 
    grid={ gridState.grid } 
    dispatchPlace={ (placeObj) => gridDispatch({ type: PLACE, payload: placeObj }) } 
    dispatchTurn={ (nextPlayer) => gridDispatch({ type: TURN, payload: nextPlayer }) } />

</div>
</div>
</>
)
}

export default App
