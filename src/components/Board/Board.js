import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'X',
            gameEnded: false,
            winner: undefined,
        };

        this.gameState = {
            board: Array(9).fill(''),
            totalMoves: 0
        }
    }

    clicked(event) {
        if(this.gameState.board[event.target.dataset.square] === '') {
            this.gameState.board[event.target.dataset.square] = this.state.turn;
            event.target.innerText = this.state.turn;

            this.setState({
                turn: this.state.turn === 'X' ? 'O' : 'X'
            });

            this.gameState.totalMoves++;
        }
        var result = this.checkWinner();

        if(result === 'X') {
            this.setState({
                gameEnded: true,
                winner: 'X',
                winnerLine: 'X wins'
            });
            console.log("X wins");
        } else if(result === 'O') {
            this.setState({
                gameEnded: true,
                winner: 'O',
                winnerLine: 'O wins'
            });
            console.log("O wins");
        } else if(result === "draw") {
            this.setState({
               gameEnded: true,
               winner: 'draw',
               winnerLine: 'match is a draw'
            });
        }
    }

    checkWinner() {
        var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        var board = this.gameState.board;

        for(let i = 0; i < moves.length; i++) {
            if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
                return board[moves[i][0]];
            }
        }

        console.log(this.gameState.totalMoves);
        if(this.gameState.totalMoves === 9) {
            return "draw";
        }
    }

    //compute rand num from 0-8
    // computeRandomNumber() {
    //     let randNum = Math.floor((Math.random() * 8));
    //     return randNum;
    // }
    //
    //
    // cupTurn() {
    //     do {
    //      this.computeRandomNumber();
    //     } while (this.gameState.board !== '');
    // }


    render() {
        return(
            <div id="game">
                <div id="state">{this.state.winnerLine}</div>
                <div id="head">
                    Tic Tac Toe
                </div>

                <div id="board" onClick={(e) => this.clicked(e)}>
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

export default Board;