* [Creating Elements | Basics](http://learn.codingdojo.com/m/19/4884/32993)

# Creating React Elements

React.createElement is the most important method in the React library to understand right off the bat. That's because it returns the smallest building blocks of a React app: The React **element**.

It takes three arguments:

* `type`
* `props`
* `children`

You're about to use React's `createElement` method to create what will end up as a DOM node. And for now, don't worry about the `props` argument -- simply pass `null` in its place. You just need to care about the `type` and any `children` that you feed to the function.

Calling the function returns a React element-- an object that describes the type of DOM node that will eventually be rendered to the browser.

Big whoop, you have a JavaScript object that describes how a DOM element should look. How do we get it on the actual screen?

For that you'll need ReactDOM's `render` method!

Try your hand at asking `ReactDOM.render` to take our React element and throw it into a container that should already exist in the DOM.

### *A React element describes what you want to see on the screen.*

### *ReactDOM's render method adds a React Element to the HTML DOM*


#### app.js

```
	const myButton = React.createElement('button', null, 'Click Me');
	console.log(JSON.stringify(myButton));
	/*
		Prints the following:
		{
		"type":"button",
		"key":null,
		"ref":null,
		"props": {
		"children":"Click Me!"
		},
		"_owner":null,
		"_store":{}
		}
	*/
	ReactDOM.render(myButton, document.getElementById('app'));
```

The above code assumes the following container is already present in the DOM:


#### index.html

```
	<div id="app"></div>
```

Applications built with just React usually have a single root DOM node (in this case a `div` with the id of `app`), though you can have as many root nodes as you like.


### NOTES

This help from Caleb ...

```
Ben Haos [10:20 AM]
 whats the chrome extension for allowing cross origin?

Caleb Ugent [10:21 AM]
 https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

chrome.google.com
Allow-Control-Allow-Origin: *
Allows to you request any site with ajax from any source. Adds to response 'Allow-Control-Allow-Origin: *' header
```

