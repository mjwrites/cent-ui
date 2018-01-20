import React, { Component } from 'react';

export class Donation extends Component {
    render() {
        return (
            <div className="form-group donation-amount">
                <form onSubmit={this.props.handleDonation}>
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" className="form-control currency" id="amount" placeholder="0.00" value={this.props.value} onChange={this.props.change} />
                        <button type="submit" className="btn btn-default"> Donate</button>
                    </div>
                </form>
            </div>
        )
    }
}