# Routing with Data

In this module we'll explore how we can pass information to a component over the url, instead of through the attributes of that component.

## Params

Up until now we've seen static paths, meaning they don't change no matter what. When I want to render the Home component, the route to get there will always be "/".

This won't always be the case, we're creating dynamic applications. The content on the page should change depending on what information the User wants to see.

Let's use the platform you're on right now as an example. The HTML for this page is pretty much the same no matter which lecture tab you go too, the only thing that is actually changing from one page to another is the lecture material.

If you look at the url, you'll see something like this `"http://learn.codingdojo.com/m/41/4387/31976"`. Behind the scenes, Coding Dojo is using the numbers at the end of the url to decide which lecture material we should render on to the page. Those numbers are unique identifies that Coding Dojo uses to find data in their database.

`"http://learn.codingdojo.com/m/41/4387/31976"`

* 41 -> React Course
* 4387 -> Routing Chapter
* 31976 -> React Router Tab

As a front-end engineer you don't really have to know the process of grabbing that data from the database, but it will be your job to let the backend know what data the user wants to see.

## Passing Data Over The URL

We're going to modify the `Params` link, route and component to show you an example of how we can pass information over the URL. We won't be using ids just yet, we're going to pass a name over the url.

### The Link

First the link, we're going to pass the string "Bansky" over the URL. *src/Header/Header.js*

```
<Link to="/params/Bansky">Params</Link>
```

### The Route

Then the Route, we're going to modify our path so now it accepts a parameter.

*src/App.js*

```
<Route path="/params/:name" component={Params} />
```

Updating your route to what we have above, makes it so you can pass anything after "/params/" and it will render the Params component. Not only that, but we'll also have access to whatever is passed in after "/params/".

For example:

* localhost:3000/params/Bansky
* localhost:3000/params/Barney
* localhost:3000/params/Frank

## The Component

From here, we're going to access the name we passed over the url. Fortunately, React takes care of attaching the url data to `this.props`.

*src/Components/Params/Params.js*

```
import React from "react";
import "./Params.css";
import {Link} from "react-router-dom"
class Params extends React.Component{
    render(){
        return(
            <div>
                <p><Link to="/params/Barney">Barney</Link></p>
                <p><Link to="/params/Frank">Frank</Link></p>
                <p><Link to="/params/Goose">Goose</Link></p>
                <h1>Params Component | Name: {this.props.match.params.name}</h1>
            </div>
        )
    }
}
export default Params;
```

We've gone ahead and added some additional links, so that you can see how the data on the page changes as you click on the different links.

Go ahead and test it out. You'll see that `Name: {this.props.match.params.name}` will display whatever you passed in after "/params/" in your link.

### The Match Object

All of the data associated with the request being made is stored in `this.props.match`. In addition to the params being sent over the url, the following data can be found within `match`. We'll be using the path property of Match later on to create nested routes.

### The Match Object

```
{
    path: "/params/:name", 
    url: "/params/Bansky", 
    isExact: true, 
    params: {
        name: "Bansky"
    }
}
```

## Wrapping Up

In this tab, we saw a very simple example of how we can pass data to a component over a url. In our example, we only passed one parameter but you could pass as many as you need.
