import React, { Component } from 'react';
import Board from './Board';
import styled from 'styled-components';

const GameContent = styled.div`
    .puzzle {
        text-align: center;
    }
    input {
        font-size: 36px;
    }
`;

class Game extends React.Component {
    constructor(props) {
        super(props);

        let init = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        for (let i = 0; i < 20; i++) {
            let j = Math.floor(Math.random() * 9);
            let x = init[j];
            init[j] = init[8];
            init[8] = x;
        }
        
        this.state = {
            board: init,
            answer: [1, 2, 3, 4, 5, 6, 7, 8, 0]
        };
    }
    newGame() {
        let originBoard = this.state.board;
        let newBoard = this.shuffle(originBoard);
        this.updateBoard(newBoard);
    }
    updateBoard(newBoard) {
        this.setState({ board: newBoard });
        const board = this.state.board.join('');
        const answer = this.state.answer.join('');
        if (board === answer) {
            alert('Congratulate!');
        }
    }
    shuffle(originBoard) {
        const temp = originBoard.slice();
        for (let i = 0; i < 20; i++) {
            let j = Math.floor(Math.random() * 9);
            let x = temp[j];
            temp[j] = temp[8];
            temp[8] = x;
        }
        return temp;
    }
    render() {
        return (
            <GameContent>
                <div className='puzzle'>
                    <Board answer={this.state.answer} board={this.state.board} updateBoard={this.updateBoard.bind(this)} />
                    <input type='submit' value='New Game' onClick={this.newGame.bind(this)} />
                </div>
            </GameContent>
        );
    }
}

export default Game;