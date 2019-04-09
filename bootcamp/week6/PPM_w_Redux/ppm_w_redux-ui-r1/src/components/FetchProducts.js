import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./../actions/fetchActions";

import nophotosm from './../img/nophotosm.png';

class FetchProducts extends React.Component {
  
  componentWillMount() {
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

    let productList = ({ products }) => {
      if (products) {
        const returnList = Object.keys(products).map((productID, index) => {

          return (<li key={productID}>
                    <h1>{products[productID].title}</h1>
                    {products[productID].imageurl === "" ? <img style={{'border':'1px solid'}} src={nophotosm} alt="not available" /> : <img src={products[productID].url} alt="product" />}
                    <p>{products[productID].price}</p>
                  </li>
          );
        });
        return (
          <div id='productListItem'>{returnList}</div>
        );

      }

      return (
        <div id='productListItem'>ERROR!</div>
      );
    };

    return (
      <ul style={{listStyleType:'none'}}>
      {productList(data)}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  //console.log('mapStateToProps', state.data.data);
  return ({
    data: state.data.data,
    loading: state.data.loading,
    error: state.data.error
  });
};

export default connect(mapStateToProps)(FetchProducts);
