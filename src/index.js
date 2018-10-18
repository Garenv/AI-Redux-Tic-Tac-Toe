import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import winnerValueReducer from './store/reducers/winnerReducer';
// import gameLockedValueReducer from './store/reducers/gameLockedReducer';
// import gameEndedReducer from './store/reducers/gameEndedReducer';
// import totalMovesReducer from './store/reducers/totalMovesReducer';
// import turnValueReducer from './store/reducers/turnValueReducer';

import boardReducer from './store/reducers/boardReducer';
import mySaga from './store/sagas/boardSaga';

const rootReducer = combineReducers({
    board: boardReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
