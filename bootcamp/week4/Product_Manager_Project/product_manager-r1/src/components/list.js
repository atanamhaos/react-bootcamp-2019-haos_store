import React from 'react';

class List extends React.Component {

  render() {
    const ProductList = () => {
      console.log('ProductList() starts');
      let productsForList = [this.props.products.products];
      console.log(productsForList);
      console.log(productsForList.length);
      
      return (
        <div id='productListItem'>{}</div>
      )
    }

    return (
      <div id='productListPage'>
        <ProductList/>
      </div>
    );
  }
}

export default List;
