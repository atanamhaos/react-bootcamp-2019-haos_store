import React from 'react';

class BoilerplateStatefulComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div id="BoilerplateStatefulComponent">
         <p>This is a statefull component</p>
      </div>
    );
  }
}

export default BoilerplateStatefulComponent;
