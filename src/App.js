import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Colunaesquerda from './components/Colunaesquerda';
import FormCidade from './components/formCidade/FormCidade';

import FormCpf from './components/formcpf/FormCpf';
import DadosCpf from './components/dadoscpf/DadosCpf';
import Rodape from './components/rodape/Rodape';
import './css/style.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper green darken-1">
            <a href=" " className="brand-logo center">Bolsa Familia</a>
          </div>
        </nav>

        <div className="row">

          <Colunaesquerda></Colunaesquerda>

          <FormCidade></FormCidade>
          

        </div>
        <Rodape></Rodape>

      </div>
    );
  }
}
