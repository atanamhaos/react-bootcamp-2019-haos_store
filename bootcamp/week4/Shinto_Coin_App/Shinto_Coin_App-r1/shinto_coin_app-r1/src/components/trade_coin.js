import React from "react";

class Trade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {field:'',};
    }


    handleFieldEvent = (e) => {
        this.setState({
            'field': e.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let valueChange = 0;
        if (this.props.action === 'mine' || this.props.action === 'buy') {
            valueChange = this.state.field;
        } else if (this.props.action === 'sell') {
             valueChange = 0 - this.state.field;
        }
        
        this.props.transactioneer(event, this.props.action, valueChange);
        /* reset state */
        this.setState({field:'',});
    }

    render() {
        const ActionCopy = (props) => {
            let trader_info = '';

            switch (this.props.action) {
                case 'buy':
                    trader_info =
                        <p>Buy a new ShintoCoins for Only :  {`$${this.props.sellprice}.00`}<br></br>
                        Number of ShintoCoins Owned : {this.props.numCoinsOwned}</p>
                    break;
                case 'mine':
                    trader_info =
                        <p>Number of ShintoCoins Owned : {this.props.numCoinsOwned}</p>
                    break;
                case 'sell':
                    trader_info =
                        <p>Amount Paid for old ShintoCoin :  {`$${this.props.buyprice}.00`}<br></br>
                        Number of ShintoCoins Owned : {this.props.numCoinsOwned}</p>
                    break;
                default:
                    trader_info = <p>error!</p>
            }

            return (
                <div>
                {trader_info}
                </div>
            );
        };

       return (
            <div>
            <ActionCopy/>
            <form onSubmit={this.handleSubmit}>
           
            <input type="number" name="descriptionOfWork" onChange={this.handleFieldEvent} value={this.state.field} />
            <input type="submit" value={this.props.action}></input>
            </form>
            </div>
        );
    }
}

export default Trade;
