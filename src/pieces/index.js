
import produce from 'immer'
const startBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
const initGame = {

    board: startBoard,

    state: 0
    /*
    0 - init
    1 - p1 turn
    2 - p2 turn
    5 - tie
    10 - p1 win
    20 - p2 win

    */
}

const ACTION = {
    START: 'start_wlerjqal;wejl',
    PLACE: 'place_tljealejraj',
    SET_WINNER: 'setWinner_lajserlajsel;rja',
    RESET: 'reset_lejrqlawjerlje',
}

const { START, PLACE, SET_WINNER, RESET } = ACTION

const ticReducer = (state, {type, payload}) => {

    switch(type) {

        case START:
            return produce(state, draft => {
                draft.state = Math.ceil(Math.random() * 2)
            })

        case PLACE:
            // prevent completed game from attempting placement
            if (state.state > 2) { return state }
            return produce(state, draft => {
                console.log('payload', payload)
                const y = payload.coords[0]
                const x = payload.coords[1]

                if (draft.board[y][x]) { return draft }
                else { draft.board[y][x] = payload.player }

                if (payload.player === 1) { draft.state = 2 }
                if (payload.player === 2) { draft.state = 1 }
            })

        case SET_WINNER:
            return produce(state, draft => { draft.state = payload })

        case RESET:
            // prevent reset from incomplete game
            if (state.state < 3) { return state }
            return produce(state, draft => {
                draft.state = 0
                draft.board = startBoard
            })

        default: 
            return state

    }
}

const buildBorder = (y, x) => {

    let borderStyling = {}

    if (y < 2) {
        borderStyling = {
            ...borderStyling, 
            borderBottom: '1px solid black'
        }
    }

    if (x < 2) {
        borderStyling = {
            ...borderStyling,
            borderRight: '1px solid black'
        }
    }

    return borderStyling
}

const checkWinner = (board) => {

    // row
    for (let i = 0; i < 3; i++) {
        if(board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) { return [1, 10*board[i][0] ]}
    }

    // col
    for (let i = 0; i < 3; i++) {
        if(board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) { return [1, 10*board[0][i] ]}
    }

    // diag
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) { return [1, 10*board[0][0] ]}

    let emptyLeft = false
    for (let i = 0; i < 3; i++) {
        for (let l = 0; l < 3; l++) {
// I need all non-empty case to reset case
            if (!board[i][l]) { emptyLeft = true }

        }
    }

    if (!emptyLeft) { return [1, 5] }

    return [0, 0]
}

export {
    initGame,
    ticReducer,

    START,
    PLACE,
    // expects payload.coords([y, x]) && payload.player(tic.state)
    SET_WINNER,
    // expects payload(tic.state)
    RESET,

    buildBorder,
    checkWinner,
}