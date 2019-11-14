import CROS from './CROS';


export default class BuscarPorCidade {

    constructor() {
        console.log("Deu certo");
    }

    async buscar(cod, mesAno) {

        const url = "http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=" + mesAno + "&codigoIbge=" + cod + "&pagina=1";

        const cros = new CROS();


        var ajax = await cros.ajax(url);


        console.log(ajax);

        return ajax;
    }


}