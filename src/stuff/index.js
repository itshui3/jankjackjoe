
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
    PLACE: 'place_alsejralje'
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

        default:
            return state
    }

}

export {
    initGame,
    ACTION,
    ticReducer,

    Circle, 
    Cross,
}