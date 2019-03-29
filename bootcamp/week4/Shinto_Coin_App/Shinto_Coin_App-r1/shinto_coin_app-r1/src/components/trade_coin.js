import React from "react";

class Trade extends React.Component {

    constructor(props) {
        super(props);
        this.state = { field: 1, };
    }

    handleFieldEvent = (e) => {
        this.setState({ 'field': e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let change = parseInt(this.state.field, 10);
        if (this.props.action === 'sell') {
            /* Sell transactions are a negative change. */
            change = 0 - change;
        }

        if (this.props.props.numCoinsOwned + change < 0){
            alert('You do not have enough coins for that sale!');
        } else {
            this.props.transactioneer(event, this.props.action, change);
        }
        /* reset component state */
        this.setState({ field: 1, });
    }

    render() {

        const ActionCopy = ({ props }) => {
            let trader_info = '';
            switch (this.props.action) {
                case 'buy':
                    console.log();
                    trader_info = <p>
                    Buy a New ShintoCoin for Only :  {`$${props.sellprice}.00`}<br></br>
                    Positionable Financial Liquidity : {`$${props.numDollars}.00`}<br></br>
                    Your Realized ShintoCoin Asset : {props.numCoinsOwned}<br></br>
                    </p>;
                    break;
                case 'mine':
                    trader_info = <p>
                    Your Realized ShintoCoin Asset : {props.numCoinsOwned}
                    </p>;
                    break;
                case 'sell':
                    trader_info = <p>
                    Offers for One Old ShintoCoin :  {`$${props.buyprice}.00`}<br></br>
                    Positionable Financial Liquidity : {`$${props.numDollars}.00`}<br></br>
                    Your Realized ShintoCoin Asset : {props.numCoinsOwned}
                    </p>;
                    break;
                default:
                    trader_info = <p>
                error!
                </p>;
            }

            return (
                <div>
            {trader_info}
            </div>
            );
        };
        return (
        <div>
          <ActionCopy props={this.props.props}/>
          <form onSubmit={this.handleSubmit}>
            <input type="number" name="descriptionOfWork" onChange={this.handleFieldEvent} value={this.state.field}/>
            <input type="submit" value={this.props.action}></input>
          </form>
        </div>
        );
    }
}

export default Trade;
