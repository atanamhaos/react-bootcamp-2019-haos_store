import React from "react";
import { connect } from "react-redux";

class Record extends React.Component {

  render() {

    let recordlist = this.props.list.map((record, index) => { return (<li key={index}>{record}</li>) });

    return (
      <div>
      <h1>RECORD:</h1>
      <ul>
      {recordlist}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    list: state.products.activities,
    loading: state.products.loading,
    error: state.products.error
  });
};

export default connect(mapStateToProps)(Record);
