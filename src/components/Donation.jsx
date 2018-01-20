import React, { Component } from 'react';

export class Donation extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted')
    }

    render() {
        return (
            <div className="form-group donation-amount">
                {/* <label >Enter amount:</label> */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" id="amount" placeholder="$"/>
                    <button type="submit" className="btn btn-default"> Donate</button>
                </form>
            </div>
        )
    }
}