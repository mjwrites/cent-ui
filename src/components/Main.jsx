import React, { Component } from 'react';
import { Donation } from './Donation';
export class Main extends Component {
    render() {
        return (
            <div className="background-color">
                <div className="container">
                <div className="landing">
                    <h1 className="title">Cent.</h1>
                    <Donation />
                </div>
                </div>
            </div>
        )
    }
} 