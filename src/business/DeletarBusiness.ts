import { DeletarData } from "../data/DeletarData"


export default class DeletarBusiness {

    constructor(
        private deletarData: DeletarData,
    ) { }

    delete = async (cpf: string) => {

        const DeletarUsuarios = await this.deletarData.delete(cpf)

        return DeletarUsuarios
    }


    
}