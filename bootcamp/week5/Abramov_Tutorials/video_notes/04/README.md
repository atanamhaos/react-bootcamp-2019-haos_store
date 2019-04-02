# 04. The Reducer Function
[Video Link](https://egghead.io/lessons/javascript-redux-the-reducer-function)

React introduced the idea that the UI layer is most predictable when it is described as a pure function of the application's state.

Redux complements this approach by requiring that state mutations in your app need to be described by a pure function that takes the previous state and the action being dispatched, and returns the next state of your application.

**Inside a Redux application there is one particular function that takes the previous state and the action being dispatched, and returns the next state of the whole application**. It is important that the function is pure (i.e. the state being given to it isn't modified) because it has to return the new object representing the application's new state.

Even in large applications, there is still just a single function that calculates the new state of the application. It doesn't have to be slow-- if certain parts of the state haven't changed, their references can stay as-is. In the ToDo app example, when changing the visibility between "All/Completed/Active" the actual items themselves haven't changed, so the reference to the previous version of the `todos` array is left intact.

This is the 3rd and final principle of Redux: to describe state mutations you have to write a function that takes the previous state of the app and the action being dispatched, then returns the next state of the app. This function is called the **Reducer**.
