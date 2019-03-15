import React from 'react';

class TicTacToeBoard extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
        }
        */
    }

    render() {

        const ticTacToeBoardFunOuter = (row) => {
            return row.map(ticTacToeBoardFunInner);
        }

        const ticTacToeBoardFunInner = (num, index, arr) => {

            let returnElement = '';
           
            let fontSizeVar = 1234;

            const cellStyleBlank = {
                backgroundColor: 'red',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign: 'center',
                fontSize: `${fontSizeVar}%`,
            };

            const cellStyleWitEx = {
                backgroundColor: 'blue',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign: 'center',
                fontSize: `${fontSizeVar}%`,
            };

            const cellStyleWitOh = {
                backgroundColor: 'green',
                width: '29%',
                float: 'left',
                display: 'block',
                paddingBottom: '0%',
                textAlign: 'center',
                fontSize: `${fontSizeVar}%`,
            };

            if (num === 0) {
                returnElement = <div style={cellStyleBlank } onClick={ ()=>{this.props.actionOnSquare() } }>&nbsp;</div>;
            }
            else if (num === 1) {
                returnElement = <div style={cellStyleWitEx}>X</div>;
            }
            else {
                returnElement = <div style={cellStyleWitOh}>O</div>;
            }

            return returnElement;
        }

        console.log(this.props.marks.map(ticTacToeBoardFunOuter));

        return (
            <div>
            {this.props.marks.map(ticTacToeBoardFunOuter)}
            </div>
        );
    }
}

export default TicTacToeBoard;
