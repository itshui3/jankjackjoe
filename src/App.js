
import './App.css'
import React, { useState } from 'react'

import {
    Header,
    Board,
} from './components'

// import {

// } from './gameLogic'

function App() {

    const [phase, setPhase] = useState('');
    const [board, setBoard] = useState()
/* 
'' - game not started
'1' - player 1's turn
'2' - player 2's turn
'Player 1' - game ended with player 1 winning
'Player 2' - game ended with player 2 winning
*/

return (
<>

<Header 

/>

<Board 

/>

</>
)
}

export default App