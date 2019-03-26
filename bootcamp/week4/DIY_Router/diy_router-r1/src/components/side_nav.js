import React, { Component } from 'react';

class TextMessage extends Component {
    render() {
        return (
            <div>
            <p>{this.props.message}</p>
        </div>
        );
    }
}

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
            message: '',
            timervalue: 5,
        };
    }

    routeOnClick = (event) => {

        const nav_message = {
            javascript: 'A standardized general-purpose purely functional programming language, with non-strict semantics and strtong static typing.',
            haskell: 'A high-level, dynamic, untyped, and interpreted programming language.',
            coffeescript: `CoffeeScript is a programming language that transcompiles to javascript, so we'll be redirceting back to javascript in ${this.state.timervalue}.`,
        };
        this.setState({ route: event.target.value, message: nav_message[event.target.value] });

        window.history.pushState('page2', 'Title', `${event.target.value}`);
    }

    render() {

        const nav_message = {
            javascript: 'A standardized general-purpose purely functional programming language, with non-strict semantics and strtong static typing.',
            haskell: 'A high-level, dynamic, untyped, and interpreted programming language.',
            coffeescript: `CoffeeScript is a programming language that transcompiles to javascript, so we'll be redirceting back to javascript in ${this.state.timervalue}.`,
        };

        if (this.state.route === 'coffeescript' && this.state.timervalue > 0) {
            setTimeout(() => {

                let timervalue = this.state.timervalue - 1;
                this.setState({ message: `CoffeeScript is a programming language that transcompiles to javascript, so we'll be redirceting back to javascript in ${timervalue}.`, timervalue: timervalue });
            }, 1000);
        }
        else if (this.state.route === 'coffeescript' && this.state.timervalue <= 0) {

            window.history.pushState('page2', 'Title', `javascript`);

            let newStateObject = Object.assign(this.state);
            newStateObject.route =  'javascript';
            newStateObject.message = nav_message.javascript;
            newStateObject.timervalue = 5;
            this.setState(newStateObject);
            console.log(this.state);
        }

        return (
            <div>
      <div>
        <ul>
          <li><button onClick={this.routeOnClick} value="javascript" 
          message="Javascript is this"
          >JavaScript</button></li>
          <li><button onClick={this.routeOnClick} value="haskell">Haskell</button></li>
          <li><button onClick={this.routeOnClick} value="coffeescript">CoffeeScript</button></li>
        </ul>
      </div>
      
      <div>
          <hr/>
      </div>
      <div>
      <TextMessage message={this.state.message}/>
      </div>
    </div>
        );
    }
}

export default SideNav;
