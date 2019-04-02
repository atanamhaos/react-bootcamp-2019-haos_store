# 05. Writing a Counter Reducer with Tests
[Video Link](https://egghead.io/lessons/javascript-redux-writing-a-counter-reducer-with-tests)

The first function we will write is the reducer for the counter example.
We will also use the `expect` library to make assertions.

```JavaScript
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0; // If state is undefined, return the initial application state
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state; // In case an action is passed in we don't understand
  }
}

expect (
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect (
  counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect (
  counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect (
  counter(1, { type: 'DECREMENT' })
).toEqual(0);

expect (
    counter(1, { type: 'SOMETHING_ELSE' })
).toEqual(1);

expect (
  counter(undefined, {})
).toEqual(0);
```
When writing a reducer, if `state` is not defined, return an object representing the initial state. In this counter example, we return `0` since our count will start from there. If the `action` being passed in isn't one the reducer recognizes, we just return the current `state`.

The above code can be rewritten more concisely using ES6 notation and a switch statement:

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

// ... `expect` statements as above ...
```
