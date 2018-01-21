import React, { Component } from 'react';

// Components
import { Payment } from './Payment';

export class Donation extends Component {
    render() {
        return (
            <div className="form-group donation-amount">
                <form onSubmit={this.props.handleDonation}>
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" className="form-control currency" id="amount" placeholder="0.01" value={this.props.value} onChange={this.props.change} />
                        <button type="submit" className="donate-btn"><Payment /></button>
                        <br />
                    </div>
                </form>
                <p className="read-about">Learn about how you can earn <a href="https://global.americanexpress.com/rewards/landing?inav=menu_rewards_mrhome" target="_blank"><b>cashback</b> & <b>rewards</b></a> by using your AMEX card!</p>
            </div>
        )
    }
}