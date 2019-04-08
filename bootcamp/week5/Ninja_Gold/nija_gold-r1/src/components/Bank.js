import React from "react";
import { connect } from "react-redux";

class Bank extends React.Component {

  render() {
    const { bank } = this.props;

    return (
      <ul><h1>BANK: {bank}</h1></ul>
    );
  }
}

const mapStateToProps = state => {

  return ({
    bank: state.products.bank,
    loading: state.products.loading,
    error: state.products.error
  });
};

export default connect(mapStateToProps)(Bank);
