# Front-end Routing

* [Front-end routing | Client-Side Routing](http://learn.codingdojo.com/m/19/4886/23702)

You've already built React applications whose state changes trigger a rendering of updated UI. But we've yet to integrate routing into the mix.

Before we do that, let's first define what routing is in the context of web development. Strictly defined, routing is the process of moving a packet of data from source to destination. For our purposes, routing can normally be defined as "how we get from one webpage to the next." We have even used them in the context of moving a packet of data from source to destination when we were using axios to get data from other websites.

Because we're building single-page applications, we never want a change in the browser's URL bar to actually reach the server that the code sits upon. Instead, we should write code that blocks that default GET request, takes a look at the URL, and decide what to show the user.

In a sense, you can think of both the current location (the browser's URL bar) and our browsing history (where we've been in the app) as elements of application state that we need to figure out how to manage.

Eventually we'll use the excellent 'react-router' (version 4) to manage client-side routing. But first we're going to attempt build our own from scratch with simple JavaScript.