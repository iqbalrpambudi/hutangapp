import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import Dashboard        from '../pages/dashboard/dashboard'
import Pelanggan        from '../pages/pelanggan/list-pelanggan'
import TambahPelanggan  from '../pages/pelanggan/tambah-pelanggan'
import Hutang           from '../pages/hutang/list-hutang'
import TambahHutang     from '../pages/hutang/tambah-hutang'
import Pasar            from '../pages/pasar'
import Absen            from '../pages/absensi/absensi'

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path="/pelanggan" component={Pelanggan} />
        <Route path="/tambahpelanggan" component={TambahPelanggan} />
        <Route path="/hutang" component={Hutang} />
        <Route path="/tambahhutang" component={TambahHutang} />
        <Route path="/pasar" component={Pasar} />
        <Route path="/absen" component={Absen} />
      </Switch>
    </div>
    );
  }
}

export default Wrapper;