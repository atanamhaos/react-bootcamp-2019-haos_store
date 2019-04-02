Redux is a bit different from Flux architecture in that there's no dispatcher. Before diving into the actual Redux library, we're going to build a counter app by implementing a Redux-like system from scratch, starting with a regular old HTML page:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Redux Counter</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <div>
        Counter:
        <span id="counter"></span>
    </div>
    <button id="dec">Decrement</button>
    <button id="inc">Increment</button>
</body>

</html>
```

The UI is pretty simple. We have an increment and decrement button looking to update a counter that doesn't currently exist. Let's build a Redux-like system to manage our application state.

First off, what does our state look like?

```
<script>
  let state = {
    counter: 0
  };
</script>
```

Pretty simple. Before moving forward, let's build a function that uses that state to render the correct UI.

```
let state = {
  counter: 0
};

const render = () => {
  document.getElementById('counter').innerText = state.counter;
}

render();
```

Great. Now that we have our UI rendering and based on an initial state, let's move onto user events, which we know should follow the design pattern of issuing **actions**.

## Dispatching actions

Actions are just simple JavaScript objects that describe the event that took place. There are two actions we care about for this app:

```
// An action that describes an incrementing counter
{
  type: 'INC'
}
// An action that describes a decrementing counter
{
  type: 'DEC'
}
```

*In Redux, every action should have a `type` property, so we'll follow the same pattern.*

Let's register callback functions on click events that fire off those actions. What does "fire off" even mean? In Redux parlance, we want to **dispatch** those actions. For now, let's just write a placeholder `dispatch` function that our callbacks can use -- we'll figure out the logic in a bit.

```
const dispatch = (action) => {
   // Todo...
}

document.getElementById('inc').onclick = () => dispatch({ type: 'INC' });
document.getElementById('dec').onclick = () => dispatch({ type: 'DEC' });
```

Great. Our actions have been dispatched (though we haven't yet figured out the logic for that `dispatch` function). Let's do that now.

## Updating state

We want our `dispatch` function to set our state to an updated version by using the `action's` `type` property. Let's write a helper function -- we'll call it `reducer` -- to help `dispatch` figure that out.

```
let state = {
  counter: 0
};

const reducer = (state, action) => {
  switch(action.type){
  case 'INC':
    return {
      counter: state.counter + 1
    }
  case 'DEC':
    return {
      counter: state.counter - 1
    }
  default:
    return state
  }
}

const dispatch = (action) => {
  // Set state variable to updated object
  state = reducer(state, action);
}
```

Pretty clean. Now that our `dispatch` function has fed the relevant `action` to our reducer function and received an updated version of our application state, what's left to do?

Alert the view to a state change! The simplest way to do that would be to invoke the `render` function once dispatch is done replacing state.

```
const dispatch = (action) => {
  state = reducer(state, action);
  render();
}
```

Our simple application works, but there's some very unnecessary coupling going on between our dispatch and render methods.

## Your challenge

Refactor the code so that dispatch doesn't need to explicitly know about render.

### Additional resources

* [Redux docs](https://redux.js.org/)
