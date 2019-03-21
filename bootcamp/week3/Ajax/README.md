# Ajax and React

* [Ajax | Tooling & APIs](http://learn.codingdojo.com/m/19/4885/34525)

We introduced the concept of AJAX in the Fundamentals chapter. Here we're going to see how we can use AJAX with React.

## Recap

It's been a while since we used AJAX in one of our assignments so let's do a quick overview. The goal with AJAX is to make a request for some information to a server. The difference between AJAX and a regular request is that AJAX is asynchronous. We will be making our Request using JavaScript so that the page does not have to refresh.

## Choices

There are many libraries that can help us make AJAX calls, in the fundamentals chapter we used JQuery. The problem with JQuery is that it's too much, we want a library that just helps us make AJAX calls. We're going to be using Axios JS.

There aren't many differences between the top AJAX libraries. If you learn how to use one, it should be pretty easy to learn how to use the rest if need be.

## AXIOS JS

[Axios](https://github.com/axios/axios "GitHub - axios/axios: Promise based HTTP client for the browser and node.js") is a promise based HTTP client for the browser. We're not going to go in depth on how to create promises, our focus for this chapter will be on how to use them.

## Using Promises VS Callbacks

Take a look at an example of a get request in the previous chapter, here we pass the URL and a callback as parameters. The callback is invoked after the request is complete.

```
$.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
    console.log(res);
}, "json");
```
Promises work the same way, but the syntax is cleaner, and the order of events is better illustrated.

```
Axios.get("http://pokeapi.co/api/v1/pokemon/1/").then((result) => {
    console.log(res)
}).catch((err) => {
    console.log("error retrieving data", err)
})
```

Once the get request is finished **then** run this function but if you **catch** an error retrieving the data, run this function instead. Promises give us a linear way of writing asynchronous code.

