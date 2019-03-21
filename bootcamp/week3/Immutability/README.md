# Component lifecycle

There's been a movement in the JavaScript community to embrace data immutability -- that is, not to allow objects to change over time and instead to construct brand new objects when needed. It's good practice -- and one React developers try to adhere to.

Mutating objects can make our code harder to read and more difficult to debug when structures that are passed by reference (like objects and arrays) are changed in different parts of the codebase.

Enter immutability, where we avoid all mutation by building new replacement objects.

In React, you experience this when updating `state`.

Facebook recommends using the `immutability-helper` library to avoid mutation, and many developers also favor [Immutable.js](https://immutable-js.github.io/immutable-js/).

Immutability isn't required for writing working React apps, but it's a good idea. Later, Redux will follow a similar immutable pattern as it helps us maintain application-wide state.

### Additional resources

* [React immutability helpers](https://reactjs.org/docs/update.html "Immutability Helpers – React")
* [Immutable.js](https://immutable-js.github.io/immutable-js/)
* [Immutable Javascript using ES6](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/ "Immutable Javascript using ES6 and beyond")
