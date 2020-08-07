import React, { Component } from "react";
import axios from 'axios'


class TambahPelanggan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      pasar: "",
      telp: ""
    };
  }

  onNameChange = e => {
    this.setState({
      nama: e.target.value
    });
  };

  onPasarChange = e => {
    this.setState({
      pasar: e.target.value
    });
  };

  onTelpChange = e => {
    this.setState({
      telp: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault()
    
    const pelanggan = {
      nama : this.state.nama,
      pasar: this.state.pasar,
      telp: this.state.telp
    }

    axios.post('http://localhost:6000/api/add-pelanggan', pelanggan)
      .then(res => console.log(res.data));

    this.setState({ name: '', pasar: '', telp: '' })
  };

  render() {
    return (
      <div className="container">
        <h5 style={{ marginBottom: `2rem` }}>Input Data Pelanggan</h5>
        <form>
          <div className="row">
            <div className="input-field">
              <input id="nama" type="text" className="validate" onChange={this.onNameChange} value={this.state.nama}/>
              <label for="nama">Nama</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input id="pasar" type="text" className="validate" onChange={this.onPasarChange} value={this.state.pasar} />
              <label for="pasar">Pasar</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input id="telp" type="number" className="validate" onChange={this.onTelpChange} value={this.state.telp}/>
              <label for="telp">Telp</label>
            </div>
          </div>
          <button className="btn deep-purple" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TambahPelanggan;
