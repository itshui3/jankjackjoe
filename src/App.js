
import './App.css';
import React, { useReducer } from 'react'
import {
    Header,
    Board
} from './components'

import { 
    initGame,
    GAME_ACTION,
    gameReducer
} from './components/Board/_gameReducer'

function App() {

    const [gameState, dispatchGame] = useReducer(gameReducer, initGame)
    
return (
<>
<div className="outermost_cont">
    <div className='centering_wrapper'>

    <Header />

    <Board />

    </div>
</div>
</>
);
}

export default App;
