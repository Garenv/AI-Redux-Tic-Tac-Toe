import React, { Component } from 'react';
import './Board.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'X',
            board: Array(9).fill(''),
            locked: false
        }
    }

    clicked(box) {
        if(this.props.gameEndedValue || this.state.locked) { // this.props.gameLockedValue
            return;
        }

        if(this.state.board[box.dataset.square] === '') {
            // this.setState({turn: this.state.board[box.dataset.square]});
            // box.innerText = this.state.turn;
            //
            // // this.setState(state => {
            // //    box.innerHTML = state.turn;
            // //    return {turn: state.board[box.dataset.square]}
            // // });
            // //
            // // this.setState(prevState => ({
            // //    turn: prevState.turn === 'X' ? 'O' : 'X',
            // //    totalMoves: prevState.totalMoves + 1
            // // }));
            //
            // this.state.turn = this.state.turn === 'X' ? 'O' : 'X';
            // this.state.totalMoves++;

            this.state.board[box.dataset.square] = this.state.turn;
            box.innerText = this.state.turn;

            this.state.turn = this.state.turn === 'X' ? 'O' : 'X';

            // this.setState(prevState => ({
            //     totalMoves: prevState.totalMoves + 1
            // }));

            this.props.totalMovesValueRedux(this.props.totalMovesValue + 1);

            console.log();

            // this.state.totalMoves++;
        }

        // console.log("this.state.totalMoves ==> " + this.state.totalMoves);

        let result = this.checkWinner();

        switch(result) {
            case 'X':
                // this.state.gameEnded = true;
                this.props.gameEndedValueRedux(true);
                this.props.winnerValueRedux("X wins!");
                break;
            case 'O':
                // this.state.gameEnded = true;
                this.props.gameEndedValueRedux(true);
                this.props.winnerValueRedux("O wins!");
                break;
            case 'draw':
                // this.state.gameEnded = true;
                this.props.gameEndedValueRedux(true);
                this.props.winnerValueRedux("Match is a draw");
                break;
            default:
                break;
        }

        if(this.state.turn === 'O' && !this.props.gameEndedValue) {
           this.props.gameLockedValueRedux(true);
           // this.state.locked = true;
            setTimeout(() => {
                do {
                    var random = Math.floor(Math.random() * 9);
                } while(this.state.board[random] !== '');

                this.props.gameLockedValueRedux(false);
                // this.state.locked = false;
                // console.log("reached here");
                this.clicked(document.querySelectorAll('.square')[random]);
            }, 1000)
        }
    }

    checkWinner() {
        let moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        let board = this.state.board;

        for(let i = 0; i < moves.length; i++) {
            if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
                return board[moves[i][0]];
            }
        }

        console.log("this.props.totalMovesValue ==> " + this.props.totalMovesValue);
        if(this.props.totalMovesValueRedux(9)) {
            return "draw";
        }
    }

    render() {
        return(
            <div id="game">
                <div id="state">{this.props.winnerValue}</div>

                <div id="head">
                    Tic Tac Toe
                </div>

                <div id="board" onClick={(e) => this.clicked(e.target)}>
                    <div className="square" data-square="0"></div>
                    <div className="square" data-square="1"></div>
                    <div className="square" data-square="2"></div>
                    <div className="square" data-square="3"></div>
                    <div className="square" data-square="4"></div>
                    <div className="square" data-square="5"></div>
                    <div className="square" data-square="6"></div>
                    <div className="square" data-square="7"></div>
                    <div className="square" data-square="8"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        winnerValue: state.winnerValue.winnerValue,
        gameLockedValue: state.gameLockedValue.gameLockedValue,
        gameEndedValue: state.gameEndedValue.gameEndedValue,
        totalMovesValue: state.totalMovesValue.totalMovesValue

    };
};

const mapDispatchToProps = dispatch => {
    return {
        winnerValueRedux: (value) => dispatch({type: actionTypes.WINNER_VALUE, value}),
        gameLockedValueRedux: (value) => dispatch({type: actionTypes.GAME_LOCKED_VALUE, value}),
        gameEndedValueRedux: (value) => dispatch({type: actionTypes.GAME_ENDED_VALUE, value}),
        totalMovesValueRedux: (value) => dispatch({type: actionTypes.TOTAL_MOVES_VALUE, value})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Board);