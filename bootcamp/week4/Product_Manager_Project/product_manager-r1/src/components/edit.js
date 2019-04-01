import React from 'react';

class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // ToDo : Figure out a simple way to pass this in.
        formConfig:[
          { type: 'text', name: 'title', copi: 'Title' },
          { type: 'number', name: 'title', copi: 'Price' },
          { type: 'text', name: 'imageurl', copi: 'Image URL' },
        ],
      };
    }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ title: '', });
        console.log(this.state);
      }

      createLineOfForm(configObject, key) {
        return (
          <div key={key}><input type={configObject.type} onChange={this.handleChange} name={configObject.name} value={this.state.title} />{configObject.copi}</div>
        );
      }

      render() {
        console.log(this.props);
        return (
          <div className="Create">
            <form onSubmit={this.handleSubmit}>
               {this.state.formConfig.map((line, index)=>{return this.createLineOfForm(line, index)} )}
            </form>
          </div>
        );
      }
    }

    export default Edit;
