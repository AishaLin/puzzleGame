import React, { Component } from 'react';
import Cell from './Cell';
import styled from 'styled-components';

const BoardContent = styled.div`
    .board {
        font-family: sans-serif;
        min-width: 300px;
        margin: 10px;
        
        .square {
            font-size: 26px;
            display: inline-block;
            box-sizing: border-box;
            width: 100px;
            height: 100px;
            background: rgb(238, 240, 154);
            border: 1px solid rgb(143, 153, 2);
            line-height: 100px;
            text-align: center;
            &.zero {
                background: beige;
            }
        }
        .square:hover {
            background: rgb(222, 226, 112);
        }
    }
`;

class Board extends React.Component {
    componentWillMount() {
        this.findClickables(this.props.board);
    }
    componentWillReceiveProps(nextProps) {
        this.findClickables(nextProps.board);
    }

    findClickables(board) {
        const zeroIndex = board.indexOf(0);
        const possibleTopIdx = zeroIndex > 2 ? zeroIndex - 3 : null;
        const possiblRightIdx = zeroIndex % 3 !== 2 ? zeroIndex + 1 : null;
        const possiblBottomIdx = zeroIndex < 6 ? zeroIndex + 3 : null;
        const possibleLeftIdx = zeroIndex % 3 !== 0 ? zeroIndex - 1 : null;

        this.setState({
            zero: zeroIndex,
            possibleTopIdx: possibleTopIdx,
            possiblRightIdx: possiblRightIdx,
            possiblBottomIdx: possiblBottomIdx,
            possibleLeftIdx: possibleLeftIdx
        });
    }
    cellClickHandler(index) {
        if (index === this.state.possibleTopIdx || index === this.state.possiblRightIdx ||
            index === this.state.possiblBottomIdx || index === this.state.possibleLeftIdx) this.moveCell(index);
    }
    moveCell(index) {
        const board = this.props.board.slice();
        const targetValue = board[index];
        board[index] = board[this.state.zero];
        board[this.state.zero] = targetValue;
        this.props.updateBoard(board);
    }
    render() {
        const squares = this.props.board.map((val, index) => {
            if ((index + 1) % 3 === 0) {
                return (
                    <span>
                        {<Cell value={val} clickHandler={this.cellClickHandler.bind(this, index)} />}
                        <br />
                    </span>
                );
            }
            return <Cell value={val} clickHandler={this.cellClickHandler.bind(this, index)} />;
        });
        return (
            <BoardContent>
                <div className='board'>
                    {squares}
                </div>
            </BoardContent>
        );
    }
}

export default Board;