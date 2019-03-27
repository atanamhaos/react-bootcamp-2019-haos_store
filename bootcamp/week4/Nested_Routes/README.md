# Nested Routes

In this tab we're going to see how we can create nested routes. In the last tab, we added links that would render the same component but with different values. Here we're going to define some additional routes in our `Nested` component. This is pretty common in a bigger application, think about the Facebook home page. You have the main menu which would be similar to the one we defined in app.js, and then you have a bunch of side menus like the one we'll be creating here.

## Create A Sub Menu

First we're going to create some components for our sub menu to render. Within the Nested folder, create a file named *nestedComponents.js*. In here we're going to create three very simple components named Lectures, Assignments and Events.

Let's add a little bit of css first, to add some color to our different components.

*src/Components/Nested/Nested.css*

```
#sub-menu{
    height: 90vh;
    background-color: #E08E79;
}
#sub-menu a {color: #faebd7 !important; font-size: 24px;}
#assignments{
    background-color: #F1D4AF;
}
#lectures{
    background-color: #ECE5CE;
}
#events{ 
    background-color: #C5E0DC;
}
.main-content{
    text-align: center;
    height: 90vh;
    overflow:hidden; 
    padding: 0px !important;
}
```

## Nested Components

*src/Components/Nested/nestedComponents.js*

```
import React from "react";
class Assignments extends React.Component{
    render(){
        return (
            <div id="assignments" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                <h3>Assignments</h3>
                <h5>This is a list of all of the assignment that have to be completed by tomorrow.</h5>
            </div>
        )
    }
}
class Lectures extends React.Component{
    render(){
        return (
            <div id="lectures" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                <h3>Lectures</h3>
                <h5>This is a list of all of the lecture material that has to be completed by tomorrow.</h5>
            </div>
        )
    }
}
class Events extends React.Component{
    render(){
        return (
            <div id="events" className="col-lg-9 col-sm-9 col-xs-8 main-content">
                <h3>Events</h3>
                <h5>This is a list of all of the events that we will be having this week.</h5>
            </div>
        )
    }
}
export {Assignments, Lectures, Events}
```

## Adding The Sub Routes

Then we'll add some links and routes to the `Nested component`, to achieve this we're going to use the match object we mentioned in the previous tab.

*src/Components/Nested/Nested.js*

```
import React from "react";
import "./Nested.css";
import {Route, Link} from 'react-router-dom'
import {Assignments, Lectures, Events} from "./nestedComponents.js"
class Nested extends React.Component{
    render(){
        return(
            <div>
                <div id="sub-menu" className="col-lg-3 col-sm-3 col-xs-4">
                    <h2>React Course</h2>
                    <h4>Nested Routes</h4>
                    <hr />
                    <p><Link to={`${this.props.match.url}`} >Assignments</Link></p>
                    <p><Link to={`${this.props.match.url}/Lectures`} >Lectures</Link></p>
                    <p><Link to={`${this.props.match.url}/Events`} >Events</Link></p>
                </div>
                <Route exact path={`${this.props.match.url}`} component={Assignments}/>
                <Route path={`${this.props.match.url}/Lectures`} component={Lectures}/>
                <Route path={`${this.props.match.url}/Events`} component={Events}/>
            </div>
        )
    }
}
export default Nested;
```

If you take a look at the path attribute of the Route components we added, you'll notice that we used `this.path.match.url` to construct our path. We need to do this here because we want to add to the current path. Let's look at what would happen if we didn't add `match.url` to our path.

`path='/Lectures'` : If we would have just used that as our path, this component will render when the url matches `localhost:3000/Lectures`. That's not correct, we want our `Lectures` component to be rendered when the url matches `localhost:3000/nested/Lectures`.

If you take a look at the value stored in the url property of match, you'll see that it is "/nested". Whenever you create sub-routes you'll have to use an approach like we've shown above.

## Wrapping Up

In this tab we were able to create nested routes. We used these nested routes to create a sub-menu within the `Nested` component. The great thing about React-Router is that it makes creating navigation menus very easy. All we need to do is define a list of routes and specify which component we want to render when that route is matched by the URL.