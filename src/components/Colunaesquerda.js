import React from 'react';

import 'materialize-css/dist/css/materialize.css';





export default class Colunaesquerda extends React.Component {
   
    render() {

        return (
            <div>
                

                    <div className=" col s12 m4 l3   blue-grey lighten-5"  style={{ height: "500px" }}>
                        <img className="responsive-img art" src="imagens/BolsaFamilia.png" alt="img"/>

                        <hr></hr>
                            <button id="btncidade" className="btn waves-effect waves-light" type="submit" name="action"
                                > Cidade </button>
                       
                            <br></br>
                            <button id="btncpf" className="btn waves-effect waves-light" type="submit" name="action"
                                >CPF</button>
                                
                            <hr style={{ margintop: "90px" }} />
                    </div>

                </div>
            



        );



        

    }


}
