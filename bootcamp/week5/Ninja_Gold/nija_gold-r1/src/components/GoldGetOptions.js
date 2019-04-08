import React from "react";
import { connect } from "react-redux";
import { fetchGold } from "./../productActions";

class GoldList extends React.Component {

  render() {

    let getGoldOptionsStyle = { height: '150px' };
    let getGoldOptionStyle = { width: '23%', float: 'left' };

    return (
      <ul style={getGoldOptionsStyle}>
      <div style={getGoldOptionStyle}>
      <h1>Farm</h1>
      <button onClick={()=>{this.props.dispatch(fetchGold('farm'));
      }}>Farm</button>
      </div>
      <div style={getGoldOptionStyle}>
      <h1>Cave</h1>
      <button onClick={()=>{this.props.dispatch(fetchGold('cave'));}}>Cave</button>
      </div>
      <div style={getGoldOptionStyle}>
      <h1>Casino</h1>
      <button onClick={()=>{this.props.dispatch(fetchGold('casino'));}}>Casino</button>
      </div>
      <div style={getGoldOptionStyle}>
      <h1>House</h1>
      <button onClick={()=>{this.props.dispatch(fetchGold('haos'));}}>House</button>
      </div>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return ({});
};

export default connect(mapStateToProps)(GoldList);
