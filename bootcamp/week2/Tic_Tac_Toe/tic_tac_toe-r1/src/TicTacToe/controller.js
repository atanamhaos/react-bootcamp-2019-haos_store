import React from 'react';
import TicTacToeBoard from '../TicTacToe/board.js';
import Message from '../TicTacToe/message.js';

function ticTacToeLogic(boardArray, playee) {
    /* winner exists, winning player, [move x can make to win, move y can make to win] */
    let returnLogic = { winnerExist: false, winner: 0, possibleWinningMove: [0, 0] };

    function threePositionsEquals(arrOfThree) {
        return boardArray[arrOfThree[0] - 1] +
            boardArray[arrOfThree[1] - 1] +
            boardArray[arrOfThree[2] - 1];
    }

    function returnPositionsEqualsZero(arrOfThree) {
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

    for (var i = 0; i < concerningCombos.length && returnLogic.winnerExist === false; i++) {

        /* Check if a win is present, else check if a winning move is available on the next round. */
        if (Math.abs(threePositionsEquals(concerningCombos[i])) === 3) {
            returnLogic.winnerExist = true;
            returnLogic.winner = playee;
            returnLogic.possibleWinningMove = [0, 0];
        }
        else if (Math.abs(threePositionsEquals(concerningCombos[i])) === 2) {
            returnLogic.winnerExist = false;
            returnLogic.winner = '0';
            returnLogic.possibleWinningMove[Math.abs(threePositionsEquals(concerningCombos[i])) === 2 ? 0 : 1] = concerningCombos[i][returnPositionsEqualsZero(concerningCombos[i])];
        }
    }

    /* Process board with no winning move is available on the next round. */
    if ((returnLogic.possibleWinningMove[0] === 0 || returnLogic.possibleWinningMove[1] === 0) && returnLogic.winnerExist === false) {
        /* If center space is still available that is the best possible move for winning */
        if (boardArray[4] === 0) {
            if (returnLogic.possibleWinningMove[0] === 0) returnLogic.possibleWinningMove[0] = 5;
            if (returnLogic.possibleWinningMove[1] === 0) returnLogic.possibleWinningMove[1] = 5;
        }
        /* if center space is taken but upper left is not, that is the next best possible move for winning */
        else if (returnLogic.possibleWinningMove[0] === 0 && returnLogic.possibleWinningMove[1] === 0 && boardArray[0] === 0) {
            if (returnLogic.possibleWinningMove[0] === 0) returnLogic.possibleWinningMove[0] = 1;
            if (returnLogic.possibleWinningMove[1] === 0) returnLogic.possibleWinningMove[1] = 1;
        }
        /* If a player O does not have a winning move, but the player X does, best possible move for Y is blocking X */
        else if (returnLogic.possibleWinningMove[0] !== 0 && returnLogic.possibleWinningMove[1] === 0)
            returnLogic.possibleWinningMove[1] = returnLogic.possibleWinningMove[0];
        /* If a player X does not have a winning move, but the player Y does, best possible move for X is blocking Y */
        else if (returnLogic.possibleWinningMove[1] !== 0 && returnLogic.possibleWinningMove[0] === 0)
            returnLogic.possibleWinningMove[0] = returnLogic.possibleWinningMove[1];
        /* Otherwise, if no next round move could result in a win, the best possible move is to take another corner. */
        else if (returnLogic.possibleWinningMove[0] === 0 && returnLogic.possibleWinningMove[1] === 0) {
            for (var n = 0; n < boardArray.length; n = n + 2) {
                if (boardArray[n] === 0) {
                    returnLogic.possibleWinningMove[(Math.abs(playee - 1) / 2)] = i;
                    break;
                }
            }
        }
    }
    /* Return logic */
    return returnLogic;
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
            logicIsY: true,

            numMoves: 0,
            playee: 1,
            winner: 0,
        };
    }


    clickSquare = (squareClicked) => {
        let newState = null;
        let logicObject = null;

        newState = Object.assign(this.state);
        newState.board[squareClicked - 1] = this.state.playee;
        newState.numMoves = this.state.numMoves + 1;



        if (this.state.playee === 1) { newState.playee = -1; }
        else { newState.playee = 1; }
        logicObject = ticTacToeLogic(newState.board, newState.playee);



        if (logicObject.winnerExist) {
            newState.winner = logicObject.winner;
        }
        else if (newState.playee === -1) {
            //newState.playee = -1;
            if (this.state.logicIsY) {
                //console.log('Logic plays O');
                //console.log(logicObject.possibleWinningMove[0]);
                //logicMakePlay(newState.playee, logicObject, newState.board);
                //console.log('Logic plays : ' + logicObject.possibleWinningMove[Math.abs(newState.playee - 1) / 2]);
                newState.board[logicObject.possibleWinningMove[Math.abs(newState.playee - 1) / 2] - 1] = newState.playee;
                newState.playee = 1;

                logicObject = ticTacToeLogic(newState.board, -1);

                if (logicObject.winnerExist) {
                    newState.winner = logicObject.winner;
                }
                newState.numMoves = newState.numMoves + 1;

            }
        }



        /* UPDATE UI */
        this.setState(newState);
    };


    render() {
        //console.log(this.state.winner);
        //console.log(this.state.winner?'yes':'no');
        //console.log('render starts');
        //console.log(this.state);



        let action = (this.state.winner ? () => { console.log('winner declared') } : this.clickSquare);
        //console.log('render sends return');
        return (
            <div>
            
               <TicTacToeBoard marks={this.state.board} actionOnSquare={action} />
            
               <Message winner={this.state.winner} numMovesMade={this.state.numMoves} />
            
            </div>
        );
    }
}

export default GameController;
