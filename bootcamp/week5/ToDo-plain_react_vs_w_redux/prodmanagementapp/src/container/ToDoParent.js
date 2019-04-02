import React from 'react';
import 'react-router';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../styles/prodmanageparent.css';
import Home from '../component/Home';
import AllToDo from '../component/AllToDo';
import CreateToDo from '../component/CreateToDo';
import Navigation from '../component/Navigation';



class ToDoParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklist:[{id:0,task:'task 1',completed:false},{id:1,task:'task 2',completed:false},{id:2,task:'task 3',completed:false},],
      lastid:2,
    };
  }
  
  addTask = (task) => {
    let newtaskid = this.state.lastid;
    newtaskid ++;
    let taskToAdd = {id:newtaskid,task:task,completed:false};
    this.setState({tasklist: [...this.state.tasklist, taskToAdd]});
  }

  modifyTask = (id, task) => {
    console.log(id);
    console.log(task);
   let idtofind = id;
         const taskToChange = this.state.tasklist.map((item, id) => {
          console.log(item);
          console.log(idtofind);
           if (item.id == idtofind) {
             //console.log(idtofind)
             console.log('got it')
             item.task = task;
           }
      
           return item;
         });
 console.log(taskToChange);  
this.setState({tasklist:taskToChange});
    
    // let newTaskList = {...Object.assign({},this.state.tasklist)};
    // console.log(newTaskList);
    // let x = newTaskList.find(item=>item.id===id);
    // console.log(x);
    
    // let newtaskid = this.state.lastid;
    // newtaskid ++;
    // let taskToAdd = {id:newtaskid,task:task,completed:false};
  }

  deletetask = (id) => {
    console.log('delete fun');
    console.log(id);
    this.setState(state => {
      const tasklist = state.tasklist.filter(item => item.id !== id);

      return {
        tasklist,
      };
    })
    
    // let newtaskid = this.state.lastid;
    // newtaskid ++;
    // let taskToAdd = {id:newtaskid,task:task,completed:false};
    // this.setState({tasklist: [...this.state.tasklist, taskToAdd]});
  }
  
  /*
    onRemoveItem = id => {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);

      return {
        list,
      };
    });
  };
  */
  
  
  
  render() {
    //(props) =><List {...props} 
    return (
      <BrowserRouter>
        <div id="prodmanage">
          {/* Routing and Nav bar  */}
          <h1>PPM - Project Product Management</h1>
          <Navigation />
          <Switch>
            <Redirect exact from='/' to='/todos/home' />
            <Route path="/todos/home" component={Home} />
            <Route path='/todos/create' render={() => <CreateToDo modtask={false} addTask={this.addTask}/>} />
            <Route path='/todos/todo/:id' render={(props) => <CreateToDo  {...props} modtask={true} modTask={this.modifyTask} tasks={this.state.tasklist}/>} />
            <Route path='/todos/all' render={() => <AllToDo tasklist={this.state.tasklist} deletetask={this.deletetask}/>} />
            {/*<Route path="/todos/all" component={AllToDo} />  {/* displays all to todos */}*/}
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
/*
* Create 1 Todo - POST /todos
* Delete 1 Todo - DELETE /todos/:id
* View 1 && Edit 1 Todo - GET /todos/:id
* Update 1 Todo - PUT /todos/:id
* View All Todo /todos - GET /todos

*/
}
export default ToDoParent;