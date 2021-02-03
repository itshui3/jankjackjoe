const boardInit = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

const rightBorder = {
    borderRight: '1px solid lightslategrey'
}

const bottomBorder = {
    borderBottom: '1px solid lightslategrey'
}

const P = {
    init: '',
    p1: '1',
    p2: '2',
    p1w: 'Player 1',
    p2w: 'Player 2',
}

const determinePhase = (board, player) => {
// rows
for (let row = 0; row < 3; row++) {    
    if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) { 
        return `p${board[row][0]}w`
    }
}

// cols
for (let col = 0; col < 3; col++) {
    if (board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return `p${board[0][col]}w`
    }
}

// diags
if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return `p${board[0][0]}w`
}

if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return `p${board[0][2]}w`
}

    // turn switcher
    if (player === '1') { return '2' }
    else { return '1' }

}

export { determinePhase, boardInit, rightBorder, bottomBorder, P }

/*

deriving gameStateInfo from state for rendering UI & available functionality: 

[state]: [representations]

phase: [
    '' - game not started
    '1' - player 1's turn
    '2' - player 2's turn
    'Player 1' - game ended with player 1 winning
    'Player 2' - game ended with player 2 winning
]
with this centric state variable, we may not even need useReducer

board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
pieces: [
    0 - empty
    1 - player 1 piece (use circle)
    2 - player 2 piece (use cross)
]

depending on the phase, expected board behavior will change: 
phase: 
'' - prevent behavior

'1' - 
    click taken spot - prevent behavior
    click empty spot - 
        =>place circle
        =>check for 3 in a row(maybe we can perform our check dynamic to the placement location this time =o)
        ?=>switch to p2 turn in phase if not 3 in a row
        :=>switch to 'Player 1', game end phase if 3 in a row

'2' - 
    click taken spot - prevent behavior
    click empty spot -
        =>place cross
        =>check for 3 in a row(dynamically check only possible 3 in a row combinations)
        ?=>switch to p1 turn in phase if not 3 in a row
        :=>switch to 'Player 1', game end phase if 3 in a row

'3' - 
    click anywhere - reset to phase ''
    optional: press any button - reset to phase ''
*/