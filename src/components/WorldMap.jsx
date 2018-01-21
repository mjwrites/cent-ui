import React, { Component } from 'react';

export class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.renderMap = this.renderMap.bind(this);
  }

  componentWillMount() {
    this.renderMap();
  }

  renderMap() {
    fetch('http://localhost:3050/disasters',
      {
        method: 'GET'
      }).then(results => {
        results.json()
          .then((data) => {
            this.setState({
              data: data
            });
            console.log(data);
          });
      });
  }

  render() {

    return (
      <div className="gallery-container">
        <div className="world-map-gallery">
          {
            this.state.data.map((i) => {
              let value = i.name
              return (
                <div className="card" >
                  <img className="card-img-top gallery-img" src={i.img} alt="Img" />
                  <div className="card-block">
                    <h4 className="card-title" >{i.name}</h4>
                    <p className="card-text">Amount raised:   ${i.amountRaised}</p>
                    <button className="btn btn-primary" onClick={this.props.handleDisaster.bind(this, value)}>Donate now !</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}