

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