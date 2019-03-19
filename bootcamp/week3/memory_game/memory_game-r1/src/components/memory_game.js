import React, { Component } from 'react';
import GameBoard from './GameBoard';

class MemoryGame extends React.Component {


    render() {
        console.log('MemoryGame.js render()');
        return (
            <div>
          <h1>Memory Game</h1>
           <GameBoard/>
            </div>
        );
    }
}

export default MemoryGame;
