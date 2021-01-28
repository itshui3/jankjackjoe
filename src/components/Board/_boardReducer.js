
import produce from 'immer'

const initBoard = {
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        // if 0 render empty cell
        // if 1 render circleSVG
        // if 2 render xSVG
    ]
}

const BOARD_ACTION = {
    PLACE: 'ajjjacmem23k'
}

const { PLACE } = BOARD_ACTION

const boardReducer = (state, { type, payload }) => {
// when a placement occurs, I need to know:
// [0] - where to place
// [1] - what to place
    switch(type) {

        case PLACE:
            return produce(state, draft => {
                const { playerNum, coords } = payload
                // coords: [y, x]
                const y = coords[0]
                const x = coords[1]
                if (draft.board[y][x]) { return }

                else {
                    draft.board[y][x] = playerNum
                }
            })

        default: 
            return state
    }
}

export {
    initBoard,
    BOARD_ACTION,
    boardReducer
}