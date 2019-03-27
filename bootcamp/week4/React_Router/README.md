# React Router

We’ve reached the point where you can create components, pass data between those components by using props, trigger changes to a component’s state via events, and handle what our component should do throughout the different life-cycle methods.

The next step is to link certain URLs on our web page to a particular component. To do that, we’ll use a tool called react-router. React Router will let us render specific components based on the URL. For a long time, if we wanted to move from one page to another, we would make a call to a server and receive a brand new HTML page. Using Javascript, we'll be swapping components in and out of the DOM based on the current URL. This will make it possible for us to create a SINGLE-PAGE APPLICATION.

Single-Page Applications (SPAs) are Web apps that load a single HTML page (./build/index.html) and dynamically update that page as the user interacts with the app. SPAs use AJAX to create fluid and responsive Web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.

We'll be covering Ajax with React in the next chapter.

## Setting Up

We're going to be adding two new dependencies. Both of these dependencies working together will allow us to define which component should be rendered depending on the URL and help us create the links to navigate our single-page app.

```
npm install react-router react-router-dom --save
```

All of the functionality associated with your routes will be defined in your Components/app.js. Open that file and add the following imports at the top.

*src/app.js*
```
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
```

### Break Down
Let's talk about all of the components that we're importing into *src/app.js* and what we're going to use them for. The first one is quite simple, if we're going to use "react-router-dom" we have to first import "react-router" for it to work. As you go through the following material do not add the snippets to your code, we're just breaking down what these components are supposed to do. In the next tab we'll create a simple example using the components discussed here.

### BrowserRouter

The first item we're importing is the `BrowserRouter`, this will wrap all of the routes we define later on. Why is it named BrowserRouter? Shouldn't it be a given that we're going to be using React to build an application for the browser? Not anymore, React has grown up a lot in the last couple of years and one of the coolest new features is that we can now use React to build native IOS and Android applications!

### Route

We will be using this component to define which component should be rendered depending on the URL. You can check out a small example below, we'll be looking at this more in detail in the next tab. We've setup the `Route` component below so that if we were to type "localhost:8080/prop" into our browser, it would render the `Prop` component.

```
<Route path="/prop" component={Prop} />
```

### Link

Finally the Link component, we'll be using this component as a replacement for a regular `<a></a>` HTML element. When using an `<a>` tag, we're creating a link that is supposed to make a request to a server, but that is not what we want to do. We want React to handle all of the routing of our application. By using the `Link` component instead of an `<a>` tag, we're making sure that React will handle going from one page to another.

```
<Link to="/prop">Prop</Link>
```

### Wrapping Up

Understanding the purpose of the tools we use in our project is very important. We should always understand the basics of a tool before incorporating it into our project. In the next tab we'll be using these different components to create a simple Single Page application.
