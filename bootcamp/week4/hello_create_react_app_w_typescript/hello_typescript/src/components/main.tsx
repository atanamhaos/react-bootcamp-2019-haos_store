import * as React from 'react';
import './../App.css';
import logo from './../logo.svg';
import HelloTypescriptReact from './helloTypescriptReact';

// your props validation
interface Props {
}

/*
interface State {
  // state types
}
*/

class Main extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <HelloTypescriptReact/>
    );
  }
}

export default Main;

