import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card hoverable row deep-purple lighten-4">
            <div className="col s3 valign-wrapper">
              <p>{this.props.data}</p>
            </div>

            <div className="col s9 valign-wrapper">
              <p style={{fontSize:`large`}}>Hellow</p>
            </div>
        </div>
    );
  }
}

export default Card;
