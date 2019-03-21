import React from 'react';
import WorkLogForm from '../components/work_log_form.js';
import WorkLogCard from '../components/work_log_card.js';

class WorkLogApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workLogCards: [
                {project: 'personal',description: 'Tie my shoes',time: '60'},
                {project: 'work',description: 'Build incredible app',time: '15'},
                {project: 'work',description: 'Test incredible app',time: '135'},
                {project: 'work',description: 'Do something to better my company',time: '75'},
                {project: 'work',description: 'Help fellow colleague achieve awesomeness',time: '30'},
                {project: 'work',description: 'Fail fast and learn from mistake',time: '10'},
                {project: 'personal',description: 'Contemplate life',time: '120'},
                ],
        };
    }

    addWorkLogCard = (newCard) => {
        this.setState({
            workLogCards: [...this.state.workLogCards, newCard]
        });
    }


    render() {
        return (
            <div>
        <WorkLogForm addCard={this.addWorkLogCard}/>
        <WorkLogCard workLogCards={this.state.workLogCards}/> 
      
      </div>
        );
    }
}


export default WorkLogApp;
