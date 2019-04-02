# 02. Describing State Changes with Actions
[Video Link](https://egghead.io/lessons/javascript-redux-describing-state-changes-with-actions?series=getting-started-with-redux)

The second principle of Redux is that **the *state tree* is read only**.
Any time you want to change the state, you have to dispatch an **action**. An action is a plain JS object describing the change. Just like the state is the minimal representation of the data, the action is the minimal representation of the change to that data.

The only requirement for an action is that it has a type property (conventionally a String).

For example, in a counter app, there are `INCREMENT` and `DECREMENT` actions. In the case of a ToDo app, the display components don't know how an item was added to the list-- all they know is that an `ADD_TODO` action was dispatched, with `text` content "hey" and a sequential `id`.

The overall principle here is that the state is read only, and can only be modified by dispatching actions.

