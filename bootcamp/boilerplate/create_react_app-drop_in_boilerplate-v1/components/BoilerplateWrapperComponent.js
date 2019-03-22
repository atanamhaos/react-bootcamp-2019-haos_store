import React from 'react';
import BoilerplateStatefulComponent from './BoilerplateStatefulComponent.js';
import BoilerplateStatelessComponent from './BoilerplateStatelessComponent.js';

class BoilerplateWrapperComponent extends React.Component {
  render() {
    return (
      <div id="app_wrapper">
      <BoilerplateStatefulComponent/>
      <BoilerplateStatelessComponent/>
      </div>
    );
  }
}

export default BoilerplateWrapperComponent;
