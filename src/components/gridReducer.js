
import produce from 'immer'
const gridInit = {

    grid: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    playerTurn: 0

}

const GRID_ACTION = {

    PLACE: 'place',
    TURN: 'turn',
    RESET: 'reset'

}

const gridReducer = (state, { type, payload }) => {

    switch(type) {
        // another question is, if I call this without performing the mutation
        // do we write a copy of state thus creating a separate ref? 
        case GRID_ACTION.PLACE:
            return produce(state, draft => {
                // payload: { coords, playerTurn }
                console.log('in PLACE: payload => ', payload)
                // if possible switch turn
                if (draft.grid[payload.coords[0]][payload.coords[1]] === 0) {
                    draft.grid[payload.coords[0]][payload.coords[1]] = payload.playerTurn

                    if (payload.playerTurn === 1) {
                        draft.playerTurn = 2
                    } else if (payload.playerTurn === 2) {
                        draft.playerTurn = 1
                    }

                }

            })
            
        case GRID_ACTION.TURN:

            return produce(state, draft => {
                if (payload === 0) {
                    draft.playerTurn = 1
                } else if (payload === 1) {
                    draft.playerTurn = 2
                } else if (payload === 2) {
                    draft.playerTurn = 1
                }
            })

        case GRID_ACTION.RESET:

            return produce(state, draft => {
                draft.grid = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ]
            })

        default: 
            return state

    }
}

export {
    gridInit,
    GRID_ACTION,
    gridReducer
}