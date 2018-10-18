import * as actionTypes from '../actions/actions';

const initialState = {
    turnValue: 'X'
};

const turnValueReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TURN_VALUE:
            return {
                ...state,

            };
        default:
            return state;
    }
};

export default turnValueReducer;