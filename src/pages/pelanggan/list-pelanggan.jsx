import React, { Component } from "react";
import {Link} from 'react-router-dom'

class ListPelanggan extends Component {
  render() {
    return (
      <div className="container">
        <table className="striped">
        <thead>
          <tr>
              <th>Nama </th>
              <th>Pasar</th>
              <th>Telp</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>M Ros</td>
            <td>Gentong</td>
            <td>08123456789</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
        <div className="fixed-action-btn">
          <Link to={"/tambahpelanggan"} className="btn-floating btn-large green-accent">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListPelanggan;
