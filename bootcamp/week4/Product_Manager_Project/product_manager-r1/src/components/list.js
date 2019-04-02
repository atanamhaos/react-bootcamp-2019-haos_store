import React from 'react';

class List extends React.Component {

  render() {
    const ProductList = () => {
      console.log('ProductList() starts');
      let productsForList = [this.props.products.products];
      console.log(productsForList);
      console.log(productsForList.length);
      
      
      //console.log(this.props.products);
      //console.log(Object.keys(this.props.products.products));
      //console.log(productsForList);
      
      // productsForList.map((product, index)=>{
      //   console.log(product);
      //   console.log('* * * * * ');
      //   //return ();
      // })
      
      //Object.keys(this.props.products).map((key, index, array)=>{
      //   console.log(key);
      //   //return ();
      // })
      
      return (
        <div id='productListItem'>{}</div>
      )
    }

    //console.log(this.props.products);
    return (
      <div id='productListPage'>
        <ProductList/>
      </div>
    );
  }
}

export default List;
/*
          <div style={contentStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/mine" render={(props) =><Mine {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/buy" render={(props) =><Buy {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/sell" render={(props) =><Sell {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/ledger" render={(props) =><Ledger {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/transaction/:id" render={(props) =><Transaction {...props} data={this.state} transactioneer={this.transactioneer} />}/>
          </div>
*/
