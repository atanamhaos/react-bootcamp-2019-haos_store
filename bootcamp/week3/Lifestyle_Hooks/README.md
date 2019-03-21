* [Lifecycle Hooks | Tooling & APIs](http://learn.codingdojo.com/m/19/4885/33016)

We already know that building a stateful component requires a `render` method.

```
class App extends Component {
  render(){
    return (
    <div>
   	  <h1>Hello!</h1>
    </div>
    )
  }
}
```

Likewise, we know that React has some special hooks that are available to us inside our components. Setting up a component's state, whether in the constructor method or as a class property, is one example.

```
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello from state!'
		};
	}
	render(){
		return (
			<div>
		 		<h1="keyword operator from-rainbow">>{this.state.text}</h1>
	  		</div>
		)
  	}
}
```

React allows us to use some other pre-built methods if we want, which conveniently run according to where the component is in its life. We can segment a component’s life into a few periods:

* Before it first renders
* Right after it first renders
* When it gets new properties from a parent


There are plenty of others, which you can read about [here](https://reactjs.org/docs/react-component.html#the-component-lifecycle "React.Component – React").
 Rather than list them all and basically duplicate Facebook's documentation, just know that they exist for you to research whenever you find yourself saying: "I want my component to do X whenever Y happens." There's probably a lifecycle hook for that.

As for Ajax calls from a component, there’s really no better time to reach out to a server than right after the component renders (it’s also where the React developers recommend we make Ajax calls). The React function that corresponds to that segment in our component’s life is called [`componentDidMount`](https://reactjs.org/docs/react-component.html#componentdidmount "React.Component – React")

We can use it just like any other function with the comfort of knowing that it’s invoked once, immediately after the initial rendering occurs.

Check out what happens when we use a timer inside `componentDidMount`:

```
class App extends Component {
	constructor(props) {
  		super(props);
		this.state = {
	  		text: 'Hello from state!'
		}    	
  	}
    
  	componentDidMount(){
		setTimeout(()=>{
			this.setState({ text: 'New text!'})
		}, 2000);
	}
    
  	render(){
		return (
			<div>
				<h1>{this.state.text}</h1>
			</div>
		)
	}
}
```

### Additional resources

* [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle "React.Component – React")
