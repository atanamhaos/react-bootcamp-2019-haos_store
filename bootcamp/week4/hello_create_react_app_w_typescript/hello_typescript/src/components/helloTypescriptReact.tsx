import * as React from 'react';
import './../App.css';
import logo from './../logo.svg';
//import HelloTypescriptReact from './helloTypescriptReact';

interface Props {
// your props validation
}
/*
interface State {
  // state types
}
*/

class HelloTypescriptReact extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('HelloTypescriptReact render()');
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

export default HelloTypescriptReact;

/*

*/
