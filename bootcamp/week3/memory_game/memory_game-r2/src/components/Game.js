import React from 'react';
import Board from '../components/Board.js';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tileValues:['1','2','3','4','5','6'],
      gamePlayfield:[],
      gameStatus:'Loading New Game',
      gameIsLoaded:false,
      numRoundPlayed:0,
    };
  }
  
  initGame = () => {
    //this.setState({gamePlayField:['1','2','3','4','5','6','1','2','3','4','5','6']});
    //this.setState({gameIsLoaded:true});
    
    this.state.gamePlayfield=['1','2','3','4','5','6','1','2','3','4','5','6'];
    
    
    let randomPlayfield = [];
    
    //let test=1;
    //console.log(++test);
    
    
    
    /* Set Flag */
    this.state.gameIsLoaded=true;
  }
  
  processRound = () => {
    console.log('Processing round in game');
  }
  
  render() {
    if(this.state.gameIsLoaded === false){
      this.initGame();
    }
    return (
      <div>
        <Board tileValues={this.state.gamePlayfield}/>
      </div>
    );
  }
}

export default Game;
