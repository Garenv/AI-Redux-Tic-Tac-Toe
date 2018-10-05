import * as actionTypes from '../actions/actions';

const initialValue = {
    turnValue: ''
};

const turnReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.TURN_VALUE:
            console.log("turnReducer ==> " + action.value);
            return {
                ...state,
                turnValue: action.value
            };
        default:
            return state;
    }
}

export default turnReducer;