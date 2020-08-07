import React from "react";
import Axios from 'axios'
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
import indonesianLocale from "moment/locale/id";

class Absen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: this.props.user,
      absenStatus: false,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/absen/today/${this.state.nama}`).then(
      (res) => {
        res.json()
      }
    ).then((data) => {console.log(data)});
  }

  handleClick = () => {
    const data = {
      nama: "Iqbal",
      absensi: [
        {
          tanggal: moment().locale("id", indonesianLocale).format(),
          absen: 0,
        },
      ],
    };

    const url = "http://localhost:4000/api/create-absen";
    Axios.post(url, data)
      .then((res) => {
        console.log(res);
        this.setState({ absenStatus: true });
        M.toast({html: 'Sudah Absen!'})
      })
      .catch((err) => {
        console.log(err);
        M.toast({html: 'Absen gagal!'})
      });
  };

  Card() {
    return (
      <div className="container">
        <div className="card deep-purple lighten-2">
          <div className="card-content white-text">
            <span className="card-title">
              <b>Absensi</b>
            </span>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn deep-purple darken-3 white-text"
              onClick={this.handleClick}
            >
              Absen
            </button>
            <button className="waves-effect waves-light btn deep-purple darken-3 white-text">
              Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.absenStatus ? null : this.Card();
  }
}

export default Absen;
