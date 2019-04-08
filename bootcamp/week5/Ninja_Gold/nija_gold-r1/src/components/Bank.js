import React from "react";
import { connect } from "react-redux";

class Bank extends React.Component {

  render() {
    const { bank } = this.props;
    let bankstyle;
    
    if (bank < 0){
      bankstyle = {
        color:'red',
      };
    } else {
      bankstyle = {
        color:'black',
      };
    }
    
    return (
      <ul><h1 style={bankstyle}>BANK: {bank}</h1></ul>
    );
  }
}

const mapStateToProps = state => {

  return ({
    bank: state.app.bank,
    loading: state.app.loading,
    error: state.app.error
  });
};

export default connect(mapStateToProps)(Bank);
