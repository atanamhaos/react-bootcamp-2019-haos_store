# Generating_UI 
* [Generating UI | Basics](http://learn.codingdojo.com/m/19/4884/23689)

When a browser displays a beautiful user interface, it's parsing a tree of DOM nodes. You can create those nodes in a couple different ways:

* HTML
* JavaScript


Writing HTML is great because it's declarative -- the code we write just tells the browser what we want to see.

`<h1>Hello World!</h1>`

The downside is that we're limited to static content. For example, the below just does not work with vanilla HTML/JS:

`<p>The current time is: {{ WHAT DO WE DO?! }}</p>`

We have a couple of options for throwing the current time into our markup:

* Write some server-side logic that renders the current time before valid HTML is sent back to the browser client.
* Write some JavaScript on the front-end that generates the current time behind the scenes and updates the DOM accordingly.

Before the advent of single-page applications, developers took the first approach. But users have come to expect a better experience from their web apps, and won't hang around long if your page is constantly reloading.

That means we need to lean on JavaScript to constantly fetch new data and transform the DOM as our users interact with our application. For example:

```
<p>The current time is: <span id="time"></span></p>
<button id="time-btn">Get current time</button>
<script>
document.getElementById('time-btn').onclick = () => {
    document.getElementById('time').innerHTML = new Date().toString();
}
</script>
```

The above code isn't too exciting, but be sure to appreciate the following:

Because our page depends on dynamically-generated content, we are going to rely on JavaScript to some degree.

![Spectrum of HTML and Javascript image](img/ui_spectrum.png)

It's up to you and your team to decide how much JavaScript is appropriate for your app:

Now, one extremely popular strategy for generating UI with JavaScript is to do some form of templating. Templating is basically a way to enhance your HTML to work with dynamic data. For example, Angular 1.x allowed us to sprinkle things called directives on top of our HTML:

```
<ul>
    <li ng-repeat = "item in items">{{item}}</li>
</ul>
```

The above code is **A GIANT PITA** to figure out and will likely require someone who knows what they are doing to explain it, or hours of chasing through docs. *yuck*...

React sits on the far right of this spectrum -- we're going to eschew any form of templating and build almost all our markup with JavaScript objects. We'll hand those objects over to the React library and trust that it'll build the DOM for us. No intermingling HTML and JavaScript.

How are we going to organize all this JavaScript? By breaking our application into little pieces that we'll call components, which we'll learn all about later. For now, you just have to internalize a couple of concepts:

* React is a library that we can hand JavaScript objects to. It'll build the DOM for us.
* We'll organize our JavaScript code in terms of components, which are basically just functions that accept data and spit out UI:

````
const MyComponent = (data) => UI;
// For those less ES6-inclined:
function MyComponent(data) { return UI; }
```






##### Browser Dump

The Angular Toe-Dip

* [Angular 1.x - Google Search](https://www.google.com/search?q=Angular+1.x&oq=Angular+1.x&aqs=chrome..69i57j69i59j0l4.782j0j7&sourceid=chrome&ie=UTF-8)
* [ng-repeat - Google Search](https://www.google.com/search?q=ng-repeat&oq=ng-repeat&aqs=chrome..69i57j0l5.1231j1j4&sourceid=chrome&ie=UTF-8)
* [simple angular list - Google Search](https://www.google.com/search?q=simple+angular+list&oq=simple+angular+list&aqs=chrome..69i57j0l3.8175j1j4&sourceid=chrome&ie=UTF-8)
* [Angular - Displaying Data](https://angular.io/guide/displaying-data)
* [Angular - Display a Heroes List](https://angular.io/tutorial/toh-pt2)
* [AngularJS — Superheroic JavaScript MVW Framework](https://angularjs.org/)
* [AngularJS: Developer Guide: Forms](https://docs.angularjs.org/guide/forms)
* [AngularJS: API: API Reference](https://docs.angularjs.org/api)
