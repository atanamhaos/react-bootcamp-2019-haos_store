import React from 'react';
import Tile from '../components/Tile.js';

class Board extends React.Component {
    render() {
        const PlayingBoard = () => {
            return (
                this.props.tileValues.map((tileValue, tielIndex) => {
                    return (<Tile key={tielIndex} tileValue={tileValue} />); 
                    
                })
            );
        };

        return (
             <PlayingBoard />
        );
    }
}

export default Board;
