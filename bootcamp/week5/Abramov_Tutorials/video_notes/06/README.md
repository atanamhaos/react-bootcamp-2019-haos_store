# 06. Store Methods: `getState()`, `dispatch()`, and `subscribe()`
[Video Link](https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe)

This section makes use of functions built into Redux. We bring in `createStore` using the ES6 destructuring syntax.

```JavaScript
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux; // Redux CDN import syntax
// import { createStore } from 'redux' // npm module syntax

const store = createStore(counter);
```
The store binds together the 3 principles of Redux:
1. Holds the current application state object
2. Allows you to dispatch actions
3. When you create it, you need to specify the reducer that tells how state is updated with actions.

In this example, we call `createStore` with `counter` as the reducer that manages the `state` updates.

#### `store` has 3 important methods:
1. `getState()` retrieves the current state of the Redux store. If we ran `console.log(store.getState())` with the code above, we could get `0` since it is the initial state of our application.

2. `dispatch()` is the most commonly used. It is how we dispatch actions to change the state of the application. If we run `store.dispatch( { type: 'INCREMENT' });` followed by `console.log(store.getState());` we will get `1`, which reflects the current state resulting from the INCREMENT action.

3. `subscribe()` registers a callback that the redux store will call any time an action has been dispatched so you can update the UI of your application to reflect the current application state.

```JavaScript
// ... `counter` reducer as above ...

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
    store.dispatch({ type : 'INCREMENT' })
});
```

The way the code is above, the initial state (`0`) is not rendered to the body, as the rendering occurs in the subscribe callback. This can be remedied by refactoring like so:

```JavaScript
const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render(); // calling once to render the initial state (0), then the subscribe will update subsequently

document.addEventListener('click', () => {
    store.dispatch({ type : 'INCREMENT' })
});
```
