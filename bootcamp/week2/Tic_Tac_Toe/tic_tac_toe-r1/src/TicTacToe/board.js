import React from 'react';

console.log('board.js - starts laoding');

class TicTacToeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

   render() {   
        const ticTacToeBoardFun = (num) => {   
            let fontSizeVar = 1234;
            
            let returnThing = null;
            const cellStyleBlank = {
                backgroundColor: 'red',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign:'center',
                fontSize: `${fontSizeVar}%`, 
            };
    
            const cellStyleWitEx = {
                backgroundColor: 'blue',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign:'center',
                fontSize: `${fontSizeVar}%`, 
            };
    
            const cellStyleWitOh = {
                backgroundColor: 'green',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign:'center',
                fontSize: `${fontSizeVar}%`, 
            };

            if (num === 0){
                returnThing = <div style={cellStyleBlank } onClick={ ()=>{this.props.actionOnSquare() } }>&nbsp;</div>;
            }else if (num === 1){
                returnThing = <div style={cellStyleWitEx}>X</div>;
            } 
            else {
                returnThing = <div style={cellStyleWitOh}>O</div>;
            }
           return returnThing;
        } 

        return (
            <div>
            {this.props.marks[0].map(ticTacToeBoardFun)}
            {this.props.marks[1].map(ticTacToeBoardFun)}
            {this.props.marks[2].map(ticTacToeBoardFun)}
        </div>
        );
          
    }
}

export default TicTacToeBoard;