import React from 'react';

function DaftarHutang(props) {
  return (
    <div className="container">
      <p style={style.title}>Daftar Hutangan</p>
      <table className="striped">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Total Hutang</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DaftarHutang;

const style = {
  title: {
    fontSize: "large",
    marginTop: "30px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
};