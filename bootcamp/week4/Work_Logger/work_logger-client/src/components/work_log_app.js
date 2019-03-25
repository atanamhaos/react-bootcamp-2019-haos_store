import React from 'react';
import WorkLogForm from '../components/work_log_form.js';
import WorkLogCard from '../components/work_log_card.js';
import axios from 'axios';

class WorkLogApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workLogCards: [],
        };
    }

    addWorkLogCard = (newCard) => {
        axios.post(`/data`, newCard).then(response => {
            this.setState({ workLogCards: response.data.payload[0].workLogCards });
        });
        
        
    }

    deleteWorkLogCard = (indexToDelete) => {
           axios.delete(`/data/${indexToDelete}`).then(response => {
           this.setState({ workLogCards: response.data.payload[0].workLogCards });
        });
    }


    componentDidMount() {
        axios.get('/data').then(response => {
            console.log('componentDidMount');
            console.log(response);
            this.setState({ workLogCards: response.data.payload[0].workLogCards });
        });
    }


    render() {
        console.log(this.state.workLogCards);
        return (
            <div>
        <WorkLogForm addCard={this.addWorkLogCard}/>
        <WorkLogCard workLogCards={this.state.workLogCards} deleteFunction={this.deleteWorkLogCard}/> 
      
      </div>
        );
    }
}


export default WorkLogApp;
