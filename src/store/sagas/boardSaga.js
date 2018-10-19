import {call, put, takeEvery, select} from 'redux-saga/effects';

import { AI_CLICK_BOARD } from "../actions/actions";


const delay = ms => new Promise(res => setTimeout(res, ms));

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* aiAction(action) {
    let board = yield select(state => state.board);

    if(board.turn !== 'O' || board.gameEnded) {
        return;
    }

    yield call(delay, 1000);

    do {
        var random = Math.floor(Math.random() * 9);
    } while(board.board[random] !== "");

    yield put({ type: AI_CLICK_BOARD, value: random });
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

function* mySaga() {
    yield takeEvery("CLICK_BOARD", aiAction);
}

export default mySaga;