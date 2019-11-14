import React from 'react';

import 'materialize-css/dist/css/materialize.css';

export default class DadosCidade extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <div className=" col s11 m1 l4 dados " id="dados">
                    <ul className="collection" style={{ borderRadius: "12px" }}>
                        <li className="collection-item avatar">
                            <img src="imagens/ap.png" alt="" className="circle" />
                            <span className="title">Cidade</span>
                            <p><span id="valor2">{this.props.nomecidade}</span> <br></br>
                            </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="imagens/pe.png" alt="" className="circle" />
                                 <span className="title">Total de Beneficiados</span>
                            <p><strong id="tpessoas">{this.props.quantidadeBeneficiados}</strong> <br></br>
                            </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="imagens/mo.png" alt="" className="circle" />
                                     <span className="title">Valor total</span>
                            <p>R$: {this.props.valor} <span id="valor"></span> <br></br>
                            </p>
                        </li>
                    </ul>
                </div>

            </div>



        );





    }


}