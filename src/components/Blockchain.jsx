import React, { Component } from 'react';

export class Blockchain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.searchBlockchain = this.searchBlockchain.bind(this);
    }

    componentWillMount() {
        this.searchBlockchain();
    }

    searchBlockchain() {
        fetch('http://localhost:3050/donation/all',
            {
                method: 'GET',
            }).then(results => {
                results.json()
                    .then((data) => {
                        this.setState({
                            data: data
                        });
                    });
            });
    }
    render() {
        return (
            <div className="blockchain-div">
                <div className="blockchain-section" id="blockchain-section">
                    <div className="content">
                        <header> <i className="fa fa-align-center" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Current Donations</header>

                        <div className="blockchain">
                            {this.state.data.map((i) => {
                                return (
                                    <div className="content-sm">
                                        <div className="card">
                                            <div className="card-block">
                                                <h4 className="card-title" align="left">{i.name}</h4>
                                                <p className="card-hash">{i._id}</p>
                                                <p className="card-text">Amount Donated: ${i.amountDonated}</p>
                                                <hr></hr>
                                                <div className="breakdown">
                                                    <p className="donation-title">Food: <span>${i.donationBreakdown.food}</span> </p>
                                                    <p className="donation-title">Water: <span>${i.donationBreakdown.water}</span> </p>
                                                    <p className="donation-title">First Aid: <span>${i.donationBreakdown.toiletries}</span></p>
                                                    <p className="donation-title">Canned Goods: <span>${i.donationBreakdown.cannedGoods}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}