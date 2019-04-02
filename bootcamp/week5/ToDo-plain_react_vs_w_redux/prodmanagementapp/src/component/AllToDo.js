import React from 'react';
import axios from 'axios';
import "../styles/component.css";
import Display from './Display';
import {Link} from 'react-router-dom'
class Product extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
//console.log(this.props.tasklist);
    return (
      <div className="bodyclass" >
        <h1>Products List</h1>
 <ul> 
        {this.props.tasklist
          ? (this.props.tasklist.map((item, index) => {
            return <li>{item.task}<button><Link to={`/todos/todo/${item.id}`}>Modify</Link></button><button onClick={()=>{this.props.deletetask(item.id)}}>Delete</button></li>
          }))
          : null
        }
 </ul>
      </div >

    );

  }

}
export default Product;