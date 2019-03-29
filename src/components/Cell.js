import React, { Component } from 'react';

class Cell extends React.Component {
    render() {
        const cls = this.props.value === 0 ? 'square zero' : 'square';
        return (
            <span className={cls} onClick={() => this.props.clickHandler()}>{this.props.value}</span>
        );
    }
}

export default Cell;