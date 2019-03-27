# Rendering Components

In the last tab we installed "react-router" and "react-router-dom", now let's put them to use. In this example, we're going to create an app that renders some of the components that we've worked on up until now.

## Creating A Router

Like mentioned before, we're going to define all of the rules for our routing system within our *src/app.js*. Let's open up the file and make sure that we imported all of the dependencies that we need for this example.

*src/app.js*

```
import React from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Prop from "./Components/Prop/Prop.js";
import Event from "./Components/Event/Event.js"
import State from "./Components/State/State.js"
```

Notice that in addition to importing our Router components, we imported the first 3 assignments we worked on at the beginning of React. We're going to use our Router to render these components on to the DOM.

## BrowserRouter

Now inside of our App component, the first thing we'll do is add the `BrowserRouter` component, remember this component will always wrap all of our Route components. The `BrowserRouter` can only have one child, so we'll wrap all of our Route and Link components in a div.

*src/app.js*

```
    render(){
        return (
            <BrowserRouter>
                <div>
                    {/* Our links and routes will go in here */}
                </div>
            </BrowserRouter>
        )
    }
```

## Link (Nav-Bar)

Next, let's create our nav-bar. We're going to use the links here to go from one component to the next. We need three different links, one for each one of the components that we imported into app.js.

*src/app.js*

```
            <BrowserRouter>
                <div>
                    {/* This is our Navigation Menu*/}
                    <ul>
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/event">Event</Link></li>
                    </ul>
                </div>
            </BrowserRouter>
```

`<Link to="/prop">Prop</Link>`: This is how we define our links, when a user clicks on this link he will be redirected to `localhost:8080/prop`. But we still haven't defined which component should be rendered when the user reaches that URL, that comes next.

## Route

Using links, we provide users a way to navigate our application. Now we're going to define which component should be rendered depending on the link that the user clicks.

*src/app.js*
```
            <BrowserRouter>
                <div>
                    {/* This is our Navigation Menu*/}
                    <ul>
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/event">Event</Link></li>
                    </ul>
                    {/* This is how we define what components should render based off of the url */}
                    <Route exact path="/" component={State} />
                    <Route path="/prop" component={Prop} />                    
                    <Route path="/event" component={Event} />
                </div>
            </BrowserRouter>
```
`<Route exact path="/" component={State} />`: When the user's URL matches the path provided, React will render the component provided. So in this case, when the user arrives at our web-app (localhost:8080), we will render the State component. 

**When we want to define which component should be rendered at the root ("/") we have to set `exact` as one of the attributes of that route. If you don't, this component will always be rendered no matter what URL you visit.**

`<Route path="/prop" component={Prop} />`: When the user clicks on the Prop link they will be redirected to `localhost:8080/prop`, so according to the route we defined here, React will render the Prop component.

## Wrapping Up

Go ahead and start up your Webpack server, and open up the application on your browser. You'll see a list at the top, click the different links and notice how depending on which link you click a different component is rendered on to the DOM. If you don't see anything make sure to open up your inspector tools and check for errors. 