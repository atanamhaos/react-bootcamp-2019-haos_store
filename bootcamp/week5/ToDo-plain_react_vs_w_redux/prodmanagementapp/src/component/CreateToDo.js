import React from 'react';
import "../styles/component.css";
//import axios from 'axios';
import { Redirect } from 'react-router-dom';

// generic component for new product and to edit existing product information
class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newtask: '',
      redirectPage: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  formSubmit = (event) => {
    event.preventDefault();
    if (this.props.modtask){
       this.props.modTask(this.props.match.params.id, this.state.newtask);
    } else {
       this.props.addTask(this.state.newtask);
    }
    this.setState({newtask: ''});
  }

  redirectPage = () => {
    if (this.state.redirectPage) {
      return <Redirect to="/todos/all" />;
    }
  }

  componentDidMount(){
    if(this.props.modtask){
        // console.log(this.props);  
        // console.log(this.props.match.params);
        // console.log(this.props.tasks);
        // console.log(this.props.tasks[this.props.match.params.id].task);
        // console.log(this.props.tasks[this.props.match.params.id].task);
        let taskToModsText = this.props.tasks[this.props.match.params.id].task;
        this.setState({newtask:taskToModsText});
    }
    
  }
  render() {
   // console.log(window.location.pathname);
    
    // if(this.props.modtask){
    //     console.log(this.props);  
    //     console.log(this.props.match.params);
    //     console.log(this.props.tasks);
    //     console.log(this.props.tasks[this.props.match.params.id].task);
    //     console.log(this.props.tasks[this.props.match.params.id].task);
    //     let taskToModsText = this.props.tasks[this.props.match.params.id].task;
    //     //this.setState({newtask:taskToModsText});
    // }
    return (
      <div className="bodyclass">
        {this.redirectPage()}
        <h1>Work with Task</h1>
        <form onSubmit={this.formSubmit}>
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="newtask">New Task : </label>
            <input className="inputcomponent" id="newtask" name="newtask" onChange={this.handleChange} value={this.state.newtask} />
          </div>
          {/*
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="price">Price</label>
            <input className="inputcomponent" id="price" name="price" onChange={this.handleChange} value={this.state.price} />
          </div>
          <div className="datacomponent">
            <label className="componentlabel" htmlFor="url">Image url</label>
            <input className="inputcomponent" id="url" name="url" onChange={this.handleChange} value={this.state.url} />
          </div>
          */}
          <button className="btn" type="submit">Create</button>
        </form>
      </div>
    );
  }

}
export default CreateToDo;