import React from 'react';

class Message extends React.Component {

   render() {
       let message = '';
       
       if (this.props.numMovesMade >= 9 && this.props.winner === 0){
           message = 'Game is a draw';  
       }
       
       if (this.props.winner !== 0){
          if (this.props.winner === 1){
            message = 'X is the winner';  
          }
          if (this.props.winner === -1){
            message = 'Y is the winner';  
          }
          
       }
       
       return (
          <div id='ui_message'>
           <h1> {message} </h1>
          </div>
           );
   }
}

export default Message;
