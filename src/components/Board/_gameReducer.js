
import produce from 'immer'
const initGame = {
    turn: 0,
    winner: 0
}

const GAME_ACTION = {
    START: 'ajcelje_bleps',
    RESET_GAME: 'erslejrql;jcew',

    NEXT_PLAYER: 'leskjcelp',

    WINNER: 'cmemwlqejr;l',
}

const {
    START, RESET_GAME,

    NEXT_PLAYER,

    WINNER
} = GAME_ACTION

const gameReducer = (state, { type, payload }) => {

    switch(type) {
        case START:
            return produce(state, draft => {
                draft.turn = Math.ceil( Math.random() * 2 )
            })

        case RESET_GAME:
            return produce(state, draft => {
                draft.turn = 0
                draft.winner = 0
            })

        case NEXT_PLAYER:
            return produce(state, draft => {
                draft.turn = payload.playerNum
            })

        case WINNER:
            return produce(state, draft => {
                draft.winner = payload.playerNum
            })

        default: 
            return state
    }
}

export { 
    initGame,
    GAME_ACTION,
    gameReducer
}