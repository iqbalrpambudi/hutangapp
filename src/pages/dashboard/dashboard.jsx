import React, { Component } from "react";
import Tanggal from "./Tanggal";
import Absen from "./Absen";
import DaftarHutang from "./DaftarHutang";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      nama: "Iqbal",
      listed: false,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/absen/${this.state.nama}`).then((res) => {
      if (res.status === 200) {
        this.setState({ listed: true });
      }
    });
  }
  render() {
    return (
      <>
        <Tanggal />
        <Absen user={this.state.nama}/>
        <DaftarHutang />
      </>
    );
  }
}

export default Dashboard;
