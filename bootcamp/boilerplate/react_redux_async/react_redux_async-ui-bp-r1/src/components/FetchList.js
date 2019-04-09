import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./../actions/fetchActions";

class FetchList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const { loading, data, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    console.log('FetchList, render(), this.props.data : ', data);


    // ToDo: Make the indent work.
    function createHTMLListFromJSONObject(objectIn, indent) {
      let stringIndent = '';
      console.log(indent);
      if (isNaN(indent)){ indent = 0;}
      if (indent > 0){
        console.log('creating indent');
        for(let i = 0; i < indent; i++){
          //stringIndent = () => {return (<span>&nbsp;&nbsp;&nbsp;</span>) };
          stringIndent += '---'; 
        }
      } else {
        stringIndent = '';
      }
      
      return Object.keys(objectIn).map((key) => {
        console.log(objectIn[key].constructor );
        if (typeof objectIn[key] === "object") {
          return (<li>{stringIndent}{key} : {createHTMLListFromJSONObject( objectIn[key], ( parseInt(indent,10)+1) ) } </li>);
        }
        else {
          return (<li>{stringIndent}{key} : {objectIn[key]} </li>);
        }
      });
    }
    let simpleList = createHTMLListFromJSONObject(data);


    return (
      <ul>
      {simpleList}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state.data.data);
  return ({
    data: state.data.data,
    loading: state.data.loading,
    error: state.data.error
  });
};

export default connect(mapStateToProps)(FetchList);
