/*global React */
/*global ReactDOM */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //counters: [{ count: 0 }, { count: 0 }],
            counters: [],
        };
    }

    addCounter = () => {
        let newCounter = { count: 0 };
        this.state.counters.push(newCounter);
        this.setState(this.state);
    }

    incrementCounter = (counterIndex) => {
        this.state.counters[counterIndex].count++;
        this.setState({
            counters: this.state.counters
        });
    }

    reduceCounter = (counterIndex) => {
        this.state.counters[counterIndex].count--;
        this.setState({
            counters: this.state.counters
        });
    }

    counters = (props) => {
        const counterStyle = {
            width: '50%',
            display: 'block',
            marginLeft: 'auto',
            borderStyle: 'solid',
            marginRight: 'auto',
        };

        return props.state.counters.map((counterObject, counterIndex) => {

            return (
                <div key={counterIndex} style={counterStyle}>
                    <h1>{counterObject.count}</h1>
                    <button onClick={ ()=>{props.incrementCounter(counterIndex) } }>Increment</button>
                    <button onClick={ ()=>{props.reduceCounter(counterIndex) } }>Reduce</button>
                </div>
            );
        });
    }

    render() {
        let appStyle = {
            textAlign: 'center'
        };

        return (
            <div style={appStyle}>
                {/*<button onClick={ ()=>{  this.addCounter()  } }>Add Counter</button>*/}
                <button onClick={this.addCounter}>Add Counter</button>
                {this.counters(this)}
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
