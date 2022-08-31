import BuscaUsusariosData from "../data/BuscaUsuariosData";


export default class BuscaCadastroBusiness {

    constructor(
        private buscaUsusariosData: BuscaUsusariosData,
    ) { }

    DetalhesCadastro = async () => {

        const BuscarUsuarios = await this.buscaUsusariosData.obterDetalhes()

        return BuscarUsuarios
    }


    
}