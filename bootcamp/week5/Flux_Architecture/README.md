# Flux Architecture

Before we pull in additional tools to help us manage application state, know that one of the running themes of [React Conf 2017](https://conf.reactjs.org/) was that it's ok to rely on React state. Applications that update state via `setState` are perfectly legitimate and far from amateur hour.

See [You May Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) for more information...

That said, once your React application becomes big enough, you may start noticing the following annoyances:

* Props are passing through multiple components to get to their ultimate destination
* Parent components are passing callbacks multiple levels deep in order to give some child component down the chain the ability to update the parent's state
* A given user action causes a change to multiple pieces of state As this type of complexity builds, it makes less and less sense to manage state from inside certain components. Instead, a popular design pattern is to strip that responsibility away from components and keep it in separate things called **stores**.

If we decide to keep state in these stores, we need to come up with a way to both update the stores and react to changes in the stores by rendering new UI.

React's concept of `props` should already have you comfortable with unidirectional data flow (a fancy way of saying data can only flow from parent to child component), and we'd like to extend that pattern to this store-updating system we've been talking about.

Facebook came up with a pattern it calls Flux, which operates according to the graphic below.

![flux diagram](./img/flux-diagram-white-background.png)

Facebook has a great posting on the architecture [here](https://facebook.github.io/flux/docs/in-depth-overview.html#content) that you should read through. The major things to be aware of:

* User activity generates things call actions
* Those actions are somehow used to mutate the data kept in the store
* Any change to the store data sparks a re-rendering of our React components
* Only one action is processed at a time
* Data flow is unidirectional

Because Flux is a design pattern (rather than a specific library), a bunch of implementations have proliferated across the Internet. Facebook open-sourced it's [own version]https://github.com/facebook/flux), but we're going to spend most of our time exploring Redux, a popular (and simple!) library that's gained widespread popularity.