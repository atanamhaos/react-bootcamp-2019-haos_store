import React from 'react';

class TicTacToeBoard extends React.Component {
    render() {
        //console.log('TicTacToeBoard class');
        const ticTacToeBoardFun = (num, index, arr) => {
            let fontSizeVar = 1234;
            let keyVal=index+1;
            let idVal=`Square${keyVal}`;
            const cellStyleBlank = {
                backgroundColor: 'white',
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
                //console.log(this.props);
                if (this.props.winnerExist)
                return <div key={keyVal} id={idVal} style={cellStyleBlank} >&nbsp;</div>;
                else
                return <div key={keyVal} id={idVal} style={cellStyleBlank} onClick={ ()=>{this.props.actionOnSquare(keyVal) } }>&nbsp;</div>;
            }
            else if (num === 1) {
                return <div key={keyVal} id={idVal} style={cellStyleWitEx}>X</div>;
            }
            else {
                return <div key={keyVal} id={idVal} style={cellStyleWitOh}>O</div>;
            }
        };

        return (
            <div>
            {this.props.marks.map(ticTacToeBoardFun)}
            </div>
        );
    }
}

export default TicTacToeBoard;
