
import produce from 'immer'

import Circle from './Circle'
import Cross from './Cross'

const initBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const initGame = {
    board: initBoard,
    state: 0,
}

const ACTION = {
    START: 'start_welrjelwj',
    PLACE: 'place_alsejralje',
    RESULT: 'result_ljerljaas',
    RESET: 'reset_lsjkerlaje'
}

const ticReducer = (state, { type, payload }) => {

    switch(type) {

        case ACTION.START:
            return produce(state, draft => {
                draft.state = Math.ceil(Math.random() * 2)
            })

        case ACTION.PLACE:

            const Y = payload[0]
            const X = payload[1]

            return produce(state, draft => {

                draft.board[Y][X] = draft.state
                if (draft.state === 1) {
                    draft.state = 2
                } else if (draft.state === 2) {
                    draft.state = 1
                }
            })

        case ACTION.RESULT:
            return produce(state, draft => {
                draft.state = payload
            })

        case ACTION.RESET:
            return produce(state, draft => {
                draft.state = 0
                draft.board = initBoard
            })

        default:
            return state
    }

}

const checkResult = (board) => {

// row
for (let i = 0; i < board.length; i++) {

    if(board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0] * 10
    }

}

// col
for (let i = 0; i < board.length; i++) {

    if(board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i] * 10
    }

}

// diag
if(board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0] * 10
}
if(board[2][0] && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return board[2][0] * 10
}

// tie
let isTie = 5

for (let i = 0; i < board.length; i++) {
    for (let l = 0; l < board[0].length; l++) {
        if(!board[i][l]) { isTie = false }
    }
}

return isTie

}

export {
    initGame,
    ACTION,
    ticReducer,

    Circle, 
    Cross,

    checkResult,
}