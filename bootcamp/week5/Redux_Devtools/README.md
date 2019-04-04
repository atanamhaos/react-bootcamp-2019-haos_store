# Redux Devtools

Fantastic, we now know how to add a middleware to our Redux application! Unfortunately, it appears that we can only add one middleware to our app at a time; that applyMiddleware function only accepts one function. To fix that, let's bring in redux's `compose` function. `compose` takes in as many middleware functions as you need and returns one giant middleware function. This new giant middleware function runs each smaller middleware each time an action is dispatched.

Let's check try out this functionality with a new, useful middleware, [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). This middleware will allow us to see how the state changes/progresses with each newly dispatched action.

* [Redux Devtools Link](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

