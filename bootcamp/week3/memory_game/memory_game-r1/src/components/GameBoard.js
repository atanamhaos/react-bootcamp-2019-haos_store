import React from 'react';
import Tile from './Tile.js';
import '../styles/gameBoard.css'

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: [
                [{ num: '1',show:false }, { num: '2' }, { num: '3' }, { num: '4' }],
                [{ num: '2' }, { num: '6' }, { num: '1' }, { num: '2' }],
                [{ num: '3' }, { num: '4' }, { num: '5' }, { num: '6' }]
            ],
            click1:{value:'',position:''}, 
            click2:{value:'',position:''},
        };
    }
    
    tileClickEvent = (event) => {
        
        function showTile(){
        return (
            document.getElementById(`${event.target.id}`).innerHTML = `${event.target.value}`
            );
        };
        
        function hideTile(tile1, tile2){
        return (
            //console.log('tile shows' + tile1 + ' : ' + tile2)
            document.getElementById(tile1).innerHTML = '',
            document.getElementById(tile2).innerHTML = ''
            );
        }
        
        console.log(`${event.target.id}${event.target.value}`)
        
        if(this.state.click1.value===''){
          
          var tempClick1=this.state.click1;
          tempClick1.value=event.target.value;
          tempClick1.position=event.target.id;
           
          
          this.setState({click1: tempClick1});
           
          showTile();
        } else if(this.state.click2.value===''){
          //this.setState({click2:event.target.value});
          
          var tempClick2=this.state.click2;
          tempClick2.value=event.target.value;
          tempClick2.position=event.target.id;
           
          this.setState({click2: tempClick2});
         
          showTile();
          // wait here for a bit
          setTimeout(()=>{
              // hide tiles
              console.log('waiting inside');
              if(this.state.click1.value !== this.state.click2.value){
                 console.log('in the if');
                 hideTile(this.state.click1.position, this.state.click2.position);
              }

          
          /* Reset Click thingy */    
          var clearedClick1={};
          clearedClick1.value='';
          clearedClick1.position='';
          
          var clearedClick2={};
          clearedClick2.value='';
          clearedClick2.position='';
          
          this.setState({click1: clearedClick1,click2:clearedClick2});
             
              
          },2000);
          console.log('waiting outside')
        } else {
            //alert('hold on a minute');
            console.log('clcikihui');
        }
        
        
    }

    render() {

        return (
            <div>
            <h1>Game Board this is</h1>
            {
                this.state.gameBoard.map(
                (row,rowIndex)=>
                {
                   //console.log(tile);
                   return(
                     <div className='gameBoardRow'>
                    {row.map((tile,tileIndex)=>{return (<Tile rowIndex={rowIndex} tileIndex={tileIndex} valueOfTile={tile.num} tileClickEvent={this.tileClickEvent}/>);})}
                     </div>
                     );
                }
                )
            }
            </div>); /* outer return */
    } /* render */




}; /* class GameBoard  */

export default GameBoard;
