import React from 'react';
import TaskList from './TaskList.js';
//import TaskAdd from './TaskAdd.js';

const ToDoApp = () => {
    console.log('ToDoApp');
    return (
        <div>
      <h1>ToDo App</h1>
      <TaskList/>
    </div>
    );
};

// class ToDoApp extends React.Component {
//   render() {
//     console.log('ToDoApp\'s render()');
//     return (
//         <div>
//       <h1>ToDo App</h1>
//       <TaskList/>
//     </div>
//     );
//   }
// }

export default ToDoApp;
