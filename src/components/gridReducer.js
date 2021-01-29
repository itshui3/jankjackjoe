
import produce from 'immer'
import { determineWinner } from './determineWinner'
const gridInit = {

    grid: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    playerTurn: 0,
    winner: 0,

}

const GRID_ACTION = {

    PLACE: 'place',
    TURN: 'turn',
    RESETGRID: 'reset_grid',
    WINNER: 'winner',

}

const gridReducer = (state, { type, payload }) => {

    switch(type) {
        // another question is, if I call this without performing the mutation
        // do we write a copy of state thus creating a separate ref? 
        case GRID_ACTION.PLACE: 
            return produce(state, draft => {
                // payload: { coords, playerTurn }
                console.log('in PLACE: payload => ', payload)

                // validate against winner, prevent if game is over
                if (state.winner) { return }

                if (draft.grid[payload.coords[0]][payload.coords[1]] === 0) {
                    draft.grid[payload.coords[0]][payload.coords[1]] = payload.playerTurn

                    const isWinner = determineWinner(draft.grid)
                    if (isWinner) {
                        draft.winner = isWinner
                    } else {
                        if (payload.playerTurn === 1) {
                            draft.playerTurn = 2
                        } else if (payload.playerTurn === 2) {
                            draft.playerTurn = 1
                        }
                    }

                }

            })
            
        case GRID_ACTION.TURN:
            // build TURN such that it is called on init
            // we should randomly select a player and give them the first turn
            return produce(state, draft => {
                console.log('in dispatch TURN')
                draft.playerTurn = Math.ceil(Math.random() * 2)

            })

        case GRID_ACTION.RESETGRID:

            return produce(state, draft => {
                draft.grid = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ]
                draft.playerTurn = 0
                draft.winner = 0
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