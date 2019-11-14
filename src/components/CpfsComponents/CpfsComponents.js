import React from 'react';

import 'materialize-css/dist/css/materialize.css';
import FormCpf from '../formcpf/FormCpf';
import DadosCpf from '../dadoscpf/DadosCpf'; 

export default class CpfsComponents extends React.Component {

    render() {

        return (
            <div>

            <div className="col s9 " id="cpfcomponents">

                <FormCpf></FormCpf>
                <DadosCpf></DadosCpf>

             </div>   

            </div>
        );
    }
}