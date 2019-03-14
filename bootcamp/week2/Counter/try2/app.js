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

    render() {
        let appStyle = {
            textAlign: 'center'
        };

        let counterStyle = {
            width: '50%',
            display: 'block',
            marginLeft: 'auto',
            borderStyle: 'solid',
            marginRight: 'auto',
        };

        /* Create and return array of counter objects from app's state.counters */
        const counters = this.state.counters.map((counterObject, counterIndex) => {
            return (
                <div key={counterIndex} style={counterStyle}>
                            <h1>{counterObject.count}</h1>
                            <button onClick={ ()=>{this.incrementCounter(counterIndex) } }>Increment</button>
                            <button onClick={ ()=>{this.reduceCounter(counterIndex) } }>Reduce</button>
                        </div>
            );
        });

        return (
            <div style={appStyle}>
                {/*<button onClick={ ()=>{  this.addCounter()  } }>Add Counter</button>*/}
                <button onClick={this.addCounter}>Add Counter</button>
                {counters}
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
