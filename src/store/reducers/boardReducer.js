import * as actionTypes from '../actions/actions';

const initialState = {
    totalMoves: 0,
    gameEndedValue: false,
    turn: 'X',
    board: Array(9).fill(''),
    locked: false
};

const checkWinner = state => {
    let moves = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];
    let board = state.board;

    for (let i = 0; i < moves.length; i++) {
        if (board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
            return board[moves[i][0]]; // return the winner
        }
    }

    // console.log("this.props.totalMovesValue ==> " + this.props.totalMovesValue);
    if (state.totalMoves === 9) {
        return "draw";
    }
};

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CLICK_BOARD:
            if(state.gameEnded || state.locked) {
                return state;
            }

        case actionTypes.AI_CLICK_BOARD:
            let newState = {};

            newState.turn = state.turn === 'X' ? 'O' : 'X';
            newState.totalMoves = state.totalMoves + 1;

            if(state.board[action.value] !== "") {
                // do nothing
                return state;
            }

            newState.board = state.board.map((item, index) => {
               if(index == action.value) {
                   return state.turn;
               }
               return item;
            });

            // state.board[action.value] = state.turn
            console.dir(state.board); // displays Array(9)

            let result = checkWinner({...state, ...newState});

            switch(result) {
                case "X":
                case "O":
                    newState.gameEnded = true;
                    newState.winner = `${result} wins!`;
                    break;
                case "draw":
                    newState.gameEnded = true;
                    newState.winner = "Match is a draw";
                    break;
                default:
                    break;
            }

            // If this is a non-AI action, lock the board
            newState.locked = action.type === actionTypes.CLICK_BOARD;

            console.log("Setting new state", newState);
            return {...state, ...newState};

            default:
                return state;
    }
};

export default boardReducer;