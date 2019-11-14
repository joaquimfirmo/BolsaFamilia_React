import React from 'react';

import 'materialize-css/dist/css/materialize.css';

export default class DadosCidade extends React.Component {

    render() {

        return (
            <div>
                 <div className=" col s10 m4 l4 forms" id="formulario">
                    <form id="formcpf">
                        <div className="row">
                        <div className="input-field col s12" style={{marginTop: "18px;"}}>
                        <input id="cpf" type="text"/>
                        <label for="cpf">CPF</label>
                </div>
                <br></br>

                <select id="cpfMes">
                    <option value="" disabled selected>Selecione o mês</option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                </select>

                <button className="btn waves-effect waves-light" type="button" name="action" id="btnCpf"
                onclick="buscarPorCpf()">Buscar<i class="material-icons right">send</i></button>
        
        
                    </div>
            
                     </form>
            </div>
            </div>

                );
                    
            
                }
            
            
}