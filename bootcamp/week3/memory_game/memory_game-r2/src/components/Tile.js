import React from 'react';
import '../styles/Tile.css';

class Tile extends React.Component {
    render() {
        return (
               <button id={this.props.tileID} className='tile'>{this.props.tileValue}</button>
        );
    }
}

export default Tile;
