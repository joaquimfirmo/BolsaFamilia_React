import React from 'react';

import 'materialize-css/dist/css/materialize.css';
import FormCidade from '../formCidade/FormCidade';
import DadosCidade from '../dadosCidade/DadosCidade';


export default class CpfsComponents extends React.Component {

    render() {

        return (
            <div>

                <div className="col s9 CidadeComp" id="cidadecomponents">

                    <FormCidade></FormCidade>
                    <DadosCidade></DadosCidade>

                </div>

            </div>



        );





    }


}