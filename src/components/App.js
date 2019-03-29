import React, { Component } from 'react';
import Game from './Game';
import Head from './Head';
import styled from 'styled-components';
import '../style.css';

class App extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <div>
                <Head />
                <Game />
            </div>
        )
    }
}

export default App;