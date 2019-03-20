import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div>
               <p>{this.props.tileValue}</p>
           </div>
        );
    }
}

export default Tile;
