import React from "react";
import moment from "moment";
import indonesianLocale from "moment/locale/id";
import pasaran from "../../modules/pasaran";

function Tanggal(props) {
  return (
    <div className="container">
      <div className="card blue lighten-1">
        <div className="card-content white-text">
          <h4 style={{ marginBottom: 0 }}>
            {moment().locale("id", indonesianLocale).format("dddd")}{" "}
            <small>{pasaran}</small>
          </h4>
          <p>
            {moment().locale("id", indonesianLocale).format("Do MMMM YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tanggal;
