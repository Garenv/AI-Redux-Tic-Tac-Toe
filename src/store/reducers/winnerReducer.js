import * as actionTypes from '../actions/actions';

const initialState = {
    winnerValue: ''
};

const winnerReducer = (state = initialState, action) => {
    console.log("[winnerReducer] => " + action.value);
    switch(action.type) {
        case actionTypes.WINNER_VALUE:
            return{
                ...state,
                winnerValue: action.value
            };
        default:
            return state;
    }
}

export default winnerReducer;
