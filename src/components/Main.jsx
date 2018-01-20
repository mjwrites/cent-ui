import React, { Component } from 'react';

// Components
import { Donation } from './Donation';
import { WorldMap } from './WorldMap';
import { Payment } from './Payment';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Cent',
            component: '',
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDonation = this.handleDonation.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ value: e.target.value.toLowerCase() });
    }

    handleDonation(e) {
        e.preventDefault();
        if (this.state.value == '') {
            alert('Please enter a donation amount.');
        }
        else {
            this.setState({
                component: 'Payment'
            });
        }
    }
    render() {
        let component = null;

        switch (this.state.component) {
            case 'donation':
                component = (
                    <Donation handleDonation={this.handleDonation} value={this.state.value} change={this.handleChange} />
                )
                break;
            case 'Payment':
                component = (
                    <div>
                        <Donation handleDonation={this.handleDonation} value={this.state.value} change={this.handleChange} />
                        {/* <Payment /> */}
                    </div>
                )
                break;
            default:
                component = (
                    <Donation handleDonation={this.handleDonation} value={this.state.value} change={this.handleChange} />
                )
        }
        return (
            <div className="background-color">
                <div className="container">
                    <div className="landing">
                        <h1 className="title">{this.state.title}</h1>
                        {component}
                    </div>
                </div>
            </div>
        )
    }
} 