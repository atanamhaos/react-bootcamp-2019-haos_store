import React from "react";
import { connect } from "react-redux";

class Record extends React.Component {

  render() {

    let recordlist = this.props.list.map((record, index) => { return (<li key={index}>{record}</li>) });
    
    let recordsListStyle = {
      listStyleType:'none',
    };
    
    return (
      <div>
        <h1>RECORD:</h1>
        <ul style={recordsListStyle}>
          {recordlist}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    list: state.app.activities,
    loading: state.app.loading,
    error: state.app.error
  });
};

export default connect(mapStateToProps)(Record);
