import React, { Component } from 'react';
import './Board.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

class Board extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     turn: 'X',
        //     board: Array(9).fill(''),
        //     locked: false
        // }
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        this.props.clickBoard(e.target.dataset.square);
    }

    render() {
        console.log("props", this.props);
        return(
            <div id="game">
                <div id="state">{this.props.winner}</div>

                <div id="head">Tic Tac Toe</div>

                <div id="board" onClick={this.clicked}>
                    {
                        this.props.board.map((val, sq) => (
                            <div className="square" data-square={sq} key={sq}>
                                {val}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.board;
};

const mapDispatchToProps = dispatch => {
    return {
        clickBoard: value => dispatch({type: actionTypes.CLICK_BOARD, value})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Board);