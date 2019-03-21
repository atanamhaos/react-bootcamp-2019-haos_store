import React from 'react';

class WorkLogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: 'work',
            description: '',
            time: '',
        }
    }

    handleProjectFieldEvent = (e) => {
        this.setState({
            "project": e.target.value
        })
    }

    handleDescriptionFieldEvent = (e) => {
        this.setState({
            "description": e.target.value
        })
    }

    handleTimeFieldEvent = (e) => {
        this.setState({
            "time": e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCard(this.state);
        /* Reset Card */
        this.setState({
            project: 'work',
            description: '',
            time: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Project : </label>
                <select name="Project"  onChange={this.handleProjectFieldEvent}>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
                 <br></br>
                <label>Description : </label><input type="text" name="descriptionOfWork" onChange={this.handleDescriptionFieldEvent} value={this.state.description} />
                 <br></br>
                <label>Minutes : </label><input type="number" name="time" onChange={this.handleTimeFieldEvent} value={this.state.time} />
                  <br></br>
                  <input type="submit"></input>
            </form>

        );
    }
}

export default WorkLogForm;
