import React, { Component } from "react";
import Card from "./card";
import "../../style.css";
import axios from 'axios'

class Absensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: [
        "januari",
        "februari",
        "maret",
        "april",
        "mei",
        "juni",
        "juli",
        "agustus",
        "september",
        "oktober",
        "november",
        "desember"
      ],
      selectedMonth: "",
      data:[]
    };

    this.date = new Date().getDate();
  }

  componentDidMount() {
    // let select = document.querySelectorAll("select");
    // let tabs = document.getElementById("tabs");
    // M.Tabs.init(tabs, {});
    // M.FormSelect.init(select, {});
    
    this.getData()
    console.log(this.getData())
    // console.log(this.state.data)

  }

  getData() {
    axios.get('http://localhost:4000/absen')
    .then(res => console.log(res))
  }


  cardRender() {
    let data = [];
    for (let i = 1; i <= this.date; i++) {
      data[i] = <Card key={i} data={i} />;
    }
    return data;
  }

  render() {
    return (
        <div className="row" style={{ marginTop: `1rem` }}>
          <div className="col s12 m9 center-align">
            <ul id="tabs" className="tabs">
              {this.state.month.map((data, index) => (
                <li key={index} className="tab col" style={monthStyle}>
                  {data}
                </li>
              ))}
            </ul>

            <div className="container">
              <h2 className="header">Horizontal Card</h2>
              {this.cardRender()}
            </div>
          </div>
        </div>
    );
  }
}

export default Absensi;

const monthStyle = {
  marginRight:'2.5px',
  marginLeft:'2.5px',
  paddingRight:'10px',
  paddingLeft:'10px',
  backgroundColor:'skyblue',
  borderRadius:'5px'
}