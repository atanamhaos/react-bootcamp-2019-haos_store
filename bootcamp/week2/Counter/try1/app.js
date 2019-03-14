



class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: (this.state.count - 1) })}>Subtract 1</button>
                <button onClick={() => this.setState({ count: (this.state.count + 1) })}>Add 1</button>
            </div>
        );
    }
}

const counterArr = [];

class Counters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numCounters: 0,
            counterElements:[<Counter />, <Counter />],
        };
    }

    render() {

        //console.log(this.state.numCounters);
        //console.log(counterArr);
        //counterArr.push(<Counter />);
       
        //let counterArrayString = <Counter />
        //this.setState(this.state);
       return (
            <div>
                <button onClick={() => {
                    //counterArr.push(<Counter />);
                    //console.log(counterArr);
                    //console.log(this.state);
                    //let newState = 
                    //this.setState(this.state);
                    //console.log(this.state.counterElements);
                    //let newState = [];
                    //newState = this.state.counterElements.push(`${newCounter}`);
                    //this.state.setState(newState);
                    // console.log(this.state.counterElements);
                    // let newState = this.state.counterElements;
                    // console.log(newState);
                    // let newCounter = <Counter />;
                    // console.log(newCounter);
                    // newState.push(newCounter);
                    // console.log(this.state.counterElements);
                    // console.log(newState);
                    //this.state.setState(this.state.toString());
                    let newState = this.state;
                    console.log(newState);
                    console.log(this);
                    let newCounter = <Counter />;
                    newState.counterElements.push(newCounter);
                    this.setState(newState);
                }}>Add Counter</button>
                {this.state.counterElements}
           </div>
        );
    }
}


const App = () => {


    return (<div>
        <Counters />
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
