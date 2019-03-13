# ReactAndReactDOM
* [React & ReactDOM | Basics](http://learn.codingdojo.com/m/19/4884/23690)

Your React journey begins with two libraries: React and ReactDOM.

Go ahead and download them (using npm) and confirm the following objects are available to your JavaScript code.

```
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
<script>
    console.log(React);
    console.log(ReactDOM);
</script>
```

You could also get the source and link to it in your html file.

## React

The React object is what's going to allow us to create objects that'll eventually become DOM nodes. We need React to create these objects because -- eventually -- we want to take advantage of a system that automatically re-renders UI as our application state changes. If you're not sure what application state is, don't worry, we'll talk about that concept in a bit.

## ReactDOM

This is what we'll use to render our UI to the browser.

To create our descriptive objects (let's start calling them elements), we'll use the `React.createElement()` method.

To render UI to the browser, we'll use the `ReactDOM.render` method.

WOOT!