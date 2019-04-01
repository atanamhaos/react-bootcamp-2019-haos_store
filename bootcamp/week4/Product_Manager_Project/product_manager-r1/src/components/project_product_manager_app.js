import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // npm install react-router react-router-dom

import Header from './header';
import Home from './home';
import Create from './create';
import List from './list';

class PPM extends React.Component {
  
  constructor(props){
      super(props);
      this.state={
          products:{},
      };
  }
  
  formConfig = [
        { type: 'text', name: 'title', copi: 'Title' },
        { type: 'number', name: 'price', copi: 'Price' },
        { type: 'text', name: 'imageurl', copi: 'Image URL' },
      ];
  
  add_product = (productToAdd) => {

    //console.log(productToAdd);
    //console.log(newProductObject);
    //newProductObject = {productToAdd, ...newProductObject};
    //console.log(productToAdd);
    
    
    if (this.formIsInvalid(productToAdd)){
        console.log('Error from caller using callback!');
    } else {
        let newProductsId ='123';
        let newState = {...this.state};
        newState.products[newProductsId] = productToAdd;
        this.setState(newState);
        console.log(this.state);
        //event.preventDefault();
        //window.location.pathname='/products';
    }
  }
  
  formIsInvalid = (state) => {
    if (('title' in state && state.title.length >= 4) &&
      ('price' in state && state.price >= .01)) {
        return false; // Form fields are valid
      } else {
        return true; // Form fields are NOT valid
    }
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <div id='appinner'>
          <Header/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/products" render={(props) =><List {...props} products={this.state}/>}/>
          <Route exact path="/products/edit/:id" component={Create} />
          
          <Route path="/products/new" render={(props) =><Create {...props} formConfig={this.formConfig} formIsInvalid={this.formIsInvalid} callback={this.add_product}/>}/>
          
          </Switch>
        </div>
      </Router>
      );
  }
}

export default PPM;

          /* ToDo : 
          <Route path="/list" render={(props) =><List {...props} data={this.state} transactioneer={this.transactioneer} />}/>
*/
