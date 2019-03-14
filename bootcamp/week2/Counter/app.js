



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
            counters: 0
        }
    }

    render() {

        console.log(this.state.counters);
        console.log(counterArr);
        counterArr.push(<Counter />);
       
        let counterArrayString = <Counter />
    
       return (
            <div>
                <button onClick={() => {
                    counterArr.push(<Counter />);                 
                }}>Add Counter</button>
                {counterArr}
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
