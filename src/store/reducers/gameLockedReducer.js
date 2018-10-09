import * as actionTypes from '../actions/actions';

const initialState = {
    gameLockedValue: false
};

const gameLockedReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GAME_LOCKED_VALUE:
            console.log("[gameLockedReducer] ==> " + action.value);
            return {
                ...state,
                gameLockedValue: true
            };
        default:
            return state;
    }
};

export default gameLockedReducer;