import React from 'react';
import BuscarCidade from '../../funcoes/BuscarPorCidade';
import DadosCidade from '../dadosCidade/DadosCidade';

import 'materialize-css/dist/css/materialize.css';

export default class FormCidade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          resultadoAjax: {
            id: 40800707,
            dataReferencia: "01/03/2019",
            municipio: {
              codigoIBGE: "2303808",
              nomeIBGE: "Carregando...",
              pais: "BRASIL",
              uf: {
                sigla: "CE",
                nome: "CEARÁ"
              }
            },
            tipo: {
              id: 1,
              descricao: "Bolsa Família",
              descricaoDetalhada: "Bolsa Família"
            },
            valor: "Carregando...",
            quantidadeBeneficiados: "Carregando..."
          },
          codCidade : 0,
          codMes : 0
        };
    
        // aqui
        this.handleChangeCidade = this.handleChangeCidade.bind(this);
        this.handleChangeMes = this.handleChangeMes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
      }
    
      handleChangeCidade(event) {
        this.setState({ codCidade: event.target.value });
        console.log(this.state.codCidade);
      }
      
      handleChangeMes(event) {
        this.setState({ codMes: event.target.value });
        console.log(this.state.codMes);
      }
            
      handleSubmit(event) {
        this.buscar();
        event.preventDefault();
      }
    
      //Aqui
    
      async buscar() {
        let cidade = new BuscarCidade();
        
        let resposta = await cidade.buscar(this.state.codCidade, this.state.codMes);
        
    
        if (resposta !== 404) {
    
          this.setState({
            resultadoAjax: resposta
          })
        } else {
          this.setState({
            resultadoAjax: {
              municipio: {
                nomeIBGE: "Municipio invalido!"
              }
    
            }
          });
        }
      }

    render() {

        return (
            <div>

                <div className="col s11 m4 forms " id="formularioCidade">

                    <form onSubmit={this.handleSubmit} className="col s11 " >
                        <select id="selecidade" onChange={this.handleChangeCidade}>
                            <option value="" disabled defaultValue>Selecione a cidade</option>
                            <option value="2303808">Cedro</option>
                            <option value="2305506">Iguatu</option>
                            <option value="2314003">Várzea alegre</option>
                        </select>
                        <br></br>
                            <select id="seleMescidade">
                                <option value="" disabled defaultValue>Selecione o mês</option>
                                <option value="201901">Janeiro</option>
                                <option value="201902">Fevereiro</option>
                                <option value="201903">Março</option>
                            </select>
                            
                            <button className="btn waves-effect waves-light" type="submit" name="action" id="btnCidade"
                                >Buscar<i className="material-icons right">send</i>
                            </button>
                            
                        </form>
                    </div>

                    <DadosCidade
                        nomecidade={this.state.resultadoAjax.municipio.nomeIBGE}
                        quantidadeBeneficiados={this.state.resultadoAjax.quantidadeBeneficiados}
                        valor={this.state.resultadoAjax.valor}

                    ></DadosCidade>


            </div>



                    );
            
            
            
            
            
                }
            
            
}