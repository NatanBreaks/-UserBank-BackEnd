import { BaseDatabase } from "./BaseDatabase";


export class DeletarData extends BaseDatabase {

    protected TABLE_NAME = "CADASTRO_NEXT"

    delete = async (cpf:string) => {
        try {
            await this.connection(this.TABLE_NAME)
                .delete().where({cpf})
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
