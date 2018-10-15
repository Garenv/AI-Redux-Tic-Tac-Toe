import * as actionTypes from '../actions/actions';

const initialState = {
    totalMovesValue: 0
};

const totalMovesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOTAL_MOVES_VALUE:
            console.log("[totalMovesReducer] ==> " + action.value);
            return {
                ...state,
                totalMovesValue: state.totalMovesValue
            };

        default:
            return state;

    }
};

export default totalMovesReducer;