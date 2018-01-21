import React, { Component } from 'react';

export class Alert extends Component {
    render() {
        return (
            <div>
                <div class="alert alert-info" role="alert"> Currently requesting donations for
                        <span> Earthquake in Sonora, Mexico</span>
                </div>
            </div>
        )
    }
}