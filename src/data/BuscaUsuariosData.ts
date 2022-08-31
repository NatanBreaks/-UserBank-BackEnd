import { BaseDatabase } from "./BaseDatabase"

export default class BuscaUsusariosData extends BaseDatabase {

    protected TABLE_NAME = "CADASTRO_NEXT"

    obterDetalhes = async () => {
        const result = await this.connection(this.TABLE_NAME)
        .select("*")
        return result
    }
        
}