
Your mission is to build the following application. This is a **difficult assignment**, and we'll build it as a group once you've taken some time to attack it.

!["diy router definition"]('./img/diy_router.png')

This assignment is all about creating a routing system to manage which components/UI is rendered.

Some questions to ask yourself as you work through this challenge?

* How will I keep track of browser `history`
* How many components do I need?
* Can a routing system be created from React components?
* Does the browser expose a global variable to grab the current [location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
?
* How should we react to changes in the address bar, or the user hitting the browser's forward and back buttons?

We'll discuss each of those questions as you confront them. The important thing is to give it a try!

 * Build the 4 basic views
 * Build links that update the view on the page without overwriting the anchor tags
 * Make sure that the coffeescript route redirects to the JavaScript route after 5 seconds.