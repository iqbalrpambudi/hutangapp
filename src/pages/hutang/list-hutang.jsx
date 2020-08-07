import React, { Component } from "react";

class ListHutang extends Component {
  render() {
    return (
        <div className="row container">
        <div className="col s12 m4">
          <div className="card deep-purple lighten-4">
            <div className="card-content">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <button className="btn deep-purple" style={{marginRight:`1rem`}}>Detail</button>
              <button className="btn green-accent">Lunas</button>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card deep-purple lighten-4">
            <div className="card-content">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <button className="btn deep-purple" style={{marginRight:`1rem`}}>Detail</button>
              <button className="btn green-accent">Lunas</button>
            </div>
          </div>   
        </div>
        </div>
    );
  }
}

export default ListHutang;
