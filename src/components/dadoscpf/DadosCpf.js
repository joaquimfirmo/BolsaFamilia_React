import React from 'react';

import 'materialize-css/dist/css/materialize.css';

export default class DadosCidade extends React.Component {

    render() {

        return (
            <div>
                <div className="col s11 m1 l4 dados" id="dados2">
                    <ul className="collection" style={{ borderRadius: "12px;" }}>

                        <li className="collection-item avatar">
                            <img src="imagens/user.png" alt="" className="circle" />
                            <span className="title">Nome Beneficiado</span>
                            <p><strong id="pessoas"></strong> <br></br>
                            </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="imagens/card.png" alt="" className="circle" />
                            <span className="title">CPF</span>
                            <p><strong id="pcpf"></strong> <br></br>
                            </p>
                        </li>
                        <li className="collection-item avatar">
                            <img src="imagens/mo.png" alt="" className="circle" />
                            <span className="title">Valor total</span>
                            <p>R$:<strong id="pvalor"></strong> <br></br>
                            </p>
                        </li>
                    </ul>
                </div>


            </div>



        );





    }


}