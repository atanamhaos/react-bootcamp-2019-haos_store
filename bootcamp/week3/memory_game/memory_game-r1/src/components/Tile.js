import React from 'react';
import '../styles/tile.css';


    
const Tile = (props) => {


    return (
       <button className='tile' id={`${props.rowIndex}${props.tileIndex}`} value={props.valueOfTile} onClick={(event)=>{props.tileClickEvent(event)}}></button> 
    )
};

export default Tile;