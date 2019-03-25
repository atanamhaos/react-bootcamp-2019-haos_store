import React from 'react';
import '../styles/work_log_card.css'
class WorkLogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalWorkLogs: [],
            personalWorkTimeTotal: 0,
            workWorkLogs: [],
            workWorkTimeTotal: 0,
        };
    }

    render() {

        const processLogCards = (workLogCards) => {
            let updatedPersonalWorkLogs = Object.assign(this.state.personalWorkLogs);
            let updatedWorkWorkLogs = Object.assign(this.state.workWorkLogs);
            let totalPersonalWorkTime = 0;
            let totalWorkWorkTime = 0;

            for (var i = 0; i < workLogCards.length; i++) {
                let newLogObject = {};

                newLogObject.cardNum = workLogCards[i].cardNum;
                newLogObject.time = workLogCards[i].time;
                newLogObject.description = workLogCards[i].description;
                if (workLogCards[i].project === 'personal') {
                    updatedPersonalWorkLogs = [...updatedPersonalWorkLogs, newLogObject];
                    totalPersonalWorkTime = parseInt(totalPersonalWorkTime, 10) + parseInt(workLogCards[i].time, 10);
                }
                else if (workLogCards[i].project === 'work') {
                    updatedWorkWorkLogs = [...updatedWorkWorkLogs, newLogObject];
                    totalWorkWorkTime = parseInt(totalWorkWorkTime, 10) + parseInt(workLogCards[i].time, 10);
                }
            }
            updatedPersonalWorkLogs.sort((a, b) => { return a.time - b.time });
            updatedWorkWorkLogs.sort((a, b) => { return a.time - b.time });

            let personalDiv = updatedPersonalWorkLogs.map((logCard, index) => {
                return (<div className='logCard' key={logCard.cardNum}>
                            <p className='loggedTime'>{logCard.time}</p><p>{logCard.description}</p>
                            <button onClick={()=>{
                            console.log(logCard);
                            this.props.deleteFunction(logCard.cardNum);
                                
                            }}>Delete</button>
                        </div>);
            });

            let workDiv = updatedWorkWorkLogs.map((logCard, index) => {
                return (<div className='logCard' key={logCard.cardNum}>
                                <p>{logCard.time}</p><p>{logCard.description}</p>
                            <button onClick={()=>this.props.deleteFunction(logCard.cardNum)}>Delete</button>
                            </div>);
            })



            return (
                <div>
            <div className='logCardList' id='personalLogDiv'>
                 <span className='container'>
                 <span className='left'>
                 <h1 className='logCardTitle'>Personal</h1>
                 </span>
                 <span className='right'>
                 <h1 className='totalTime'>{totalPersonalWorkTime}</h1>
                 </span>
                 </span>
                   {personalDiv}
              </div>
              <div className='logCardList' id='workLogDiv'>
                 
                 <span className='container'>
                 <span className='left'>
                 <h1 className='logCardTitle'>Work</h1>
                 </span>
                 <span className='right'>
                 <h1 className='totalTime'>{totalWorkWorkTime}</h1>
                </span>
            </span>
                
                    {workDiv}
              </div>
            </div>
            );
        };



        return (
            <div>
            {processLogCards(this.props.workLogCards)}
            </div>
        );
    }
}

export default WorkLogCard;
