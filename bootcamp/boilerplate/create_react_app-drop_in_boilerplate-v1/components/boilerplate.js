import React from 'react';

class BoilerplateSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_query:''};
  }

  render() {
    return (
      <div id="search_field">
         <form>
         <input type='text' name='search_query'/>
         <button>search</button>
         </form>
      </div>
    );
  }
}

export default BoilerplateSearchComponent;
