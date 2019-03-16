import React from 'react';
import TicTacToeBoard from '../TicTacToe/board.js';

function ticTacToeLogic(boardArray) {
    /* winner exists, winning player, [move x can make to win, move y can make to win] */
    let returnObject = { winnerExist: false, winner: 0, possibleWinningMove: [0, 0] };

    function threePositionsEquals(arrOfThree) {
        return boardArray[arrOfThree[0] - 1] +
            boardArray[arrOfThree[1] - 1] +
            boardArray[arrOfThree[2] - 1];
    }

    function returnPositionsEqualsZero(arrOfThree) {
        //console.log(arrOfThree);
        if (boardArray[arrOfThree[0] - 1] === 0) return 0;
        else if (boardArray[arrOfThree[1] - 1] === 0) return 1;
        else if (boardArray[arrOfThree[2] - 1] === 0) return 2;
        else return -9999;
    }

    const concerningCombos = [
        [1, 2, 3], /* 0 */
        [4, 5, 6], /* 1 */
        [7, 8, 9], /* 2 */
        [1, 4, 7], /* 3 */
        [2, 5, 8], /* 4 */
        [3, 6, 9], /* 5 */
        [1, 5, 9], /* 6 */
        [3, 5, 7] /* 7 */
    ];

    for (var i = 0; i < concerningCombos.length; i++) {
        if (threePositionsEquals(concerningCombos[i]) === 3) {
            console.log('logic objects says X won');
            returnObject.winnerExist = true;
            returnObject.winner = '1';
            break;
        }
        else if (threePositionsEquals(concerningCombos[i]) === -3) {
            console.log('logic objects says O won');
            returnObject.winnerExist = true;
            returnObject.winner = '-1';
            break;
        }
        else if (threePositionsEquals(concerningCombos[i]) === 2) {
            returnObject.winnerExist = false;
            returnObject.winner = '0';
            returnObject.possibleWinningMove = [
                concerningCombos[i][returnPositionsEqualsZero(concerningCombos[i])],
                returnObject.possibleWinningMove[1]
            ];
        }
        else if (threePositionsEquals(concerningCombos[i]) === -2) {
            returnObject.winnerExist = false;
            returnObject.winner = '0';
            returnObject.possibleWinningMove = [returnObject.possibleWinningMove[0],
                concerningCombos[i][returnPositionsEqualsZero(concerningCombos[i])]
            ];
        }
    }

    return returnObject;
}

class GameController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            board: [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ],
            playee: 1,
            winner: 0,
        }
    }


    clickSquare = (squareClicked) => {
        let newState = Object.assign(this.state.board);

        newState[squareClicked - 1] = this.state.playee;
        this.setState({ board: newState });

        let logicObject = ticTacToeLogic(this.state.board);
        if (logicObject.winnerExist) {
            console.log('Winner');
            this.setState({ winner: logicObject.winner });
            
        }
        if (this.state.playee === 1) {
            this.setState({ playee: -1 });
        }
        else {
            this.setState({ playee: 1 });
        }

        this.render();
    };


    render() {
        console.log(this.state.winner);

        console.log(this.state.winner?'yes':'no');
        
        let action=(this.state.winner?()=>{console.log('winner declared')}:this.clickSquare);
        return (
            <div>
               <TicTacToeBoard marks={this.state.board} actionOnSquare={action} />
            </div>
        );
    }
}

export default GameController;
