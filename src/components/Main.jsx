import React, { Component } from 'react';

// Img
import Logo from '../public/img/cent_logo_c_white.png'

// Components
import { Donation } from './Donation';
import { WorldMap } from './WorldMap';
import { Breakdown } from './Breakdown';
import { Blockchain } from './Blockchain';
import { Alert } from './Alert';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Cent.',
            component: '',
            value: '',
            disaster: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDonation = this.handleDonation.bind(this);
        this.handleDisaster = this.handleDisaster.bind(this);
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
        fetch('http://localhost:3050/donation' + this.state.disaster,
            {
                method: 'PUT',
                "headers": {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    donation: this.state.value,
                })
            }).then(response => {
                this.setState({
                    component: 'breakdown'
                });
            })
    }

    handleDisaster(value){
        this.setState({
            value:value,
            component: 'donation'
        });
    }
    render() {
        let component = null;

        switch (this.state.component) {
            case 'donation':
                component = (
                    <div>
                        <Donation handleDonation={this.handleDonation} value={this.state.value} change={this.handleChange} />
                        <Blockchain />
                    </div>

                )
                break;
            case 'breakdown':
                component = (
                    <div>
                        <Breakdown />
                        <Blockchain />
                    </div>
                )
                break;
            default:
                component = (
                    <WorldMap handleDisaster={this.handleDisaster} value={this.state.value}/>
                )
        }
        return (
            <div className="bg">
                <div className="container">
                    <Alert />
                    <div className="landing">
                        <img src={Logo} alt="Cent Logo" className="cent_logo" />
                        {component}
                    </div>
                </div>
            </div>
        )
    }
} 