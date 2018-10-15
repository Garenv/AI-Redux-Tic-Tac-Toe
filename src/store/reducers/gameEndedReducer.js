import * as actionTypes from '../actions/actions';

const initialState = {
    gameEndedValue: false
};

const gameEndedReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GAME_ENDED_VALUE:
            return {
                ...state,
                gameEndedValue: true
            };
        default:
            return state;

    }
};

export default gameEndedReducer;