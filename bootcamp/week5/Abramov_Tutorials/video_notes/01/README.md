# 01. The Single Immutable State Tree
[Video Link](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux)

The first principle of Redux (no matter the complexity):

**The entire state of the application will be represented by one JavaScript object.**

All mutations and changes to the state in Redux are explicit.

Everything that changes in the application, including the data and the UI state, is contained in a single object called the **state** or **state tree**.

Since the entire state is represented in a single object, we are able to keep track of changes over time

**State in Todo App**
```
"current_state:"
[object Object] {
  todos: [[object Object] {
    completed: true,
    id: 0,
    text: "hey",
  }, [object Object] {
    completed: false,
    id: 1,
    text: "ho",
  }],
  visibilityFilter: "SHOW_ACTIVE"
}
```
