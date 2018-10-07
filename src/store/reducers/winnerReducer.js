import * as actionTypes from '../actions/actions';

const initialState = {
    winnerValue: ""
};

const winnerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.WINNER_VALUE:
            console.log("[winnerReducer] => " + action.value);
            return{
                ...state,
                winnerValue: action.value
            };
        default:
            return state;
    }
}

export default winnerReducer;
