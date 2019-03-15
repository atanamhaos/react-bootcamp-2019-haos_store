import React from 'react';
import TicTacToeBoard from '../TicTacToe/board.js';

console.log('controller.js - starts laoding');


class GameController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            board:[[0,1,-1],[1,0,1],[1,-1,0]],
            playee:[1],
        }
    }


    render(){
        console.log(this);
        
                 
        const clickSquare = () => {
            
            console.log('Square clicked by '+this.state.playee);          
            console.log('Square clicked by '+this);
            
    };

        
        return (
            <div>
               <TicTacToeBoard marks={this.state.board} actionOnSquare={clickSquare}/>
            </div>
        );
    }
}

export default GameController;