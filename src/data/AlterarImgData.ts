import axios from "axios";
import { DADOS, DATA } from "../models/DATA";
import { BaseDatabase } from "./BaseDatabase";



export class AlterarImgData extends BaseDatabase {

    protected TABLE_NAME = "CADASTRO_NEXT"

    alterarImg = async (cpf: string, avatar_url: string) => {
        try {
            await this.connection(this.TABLE_NAME)
                .update({avatar_url})
                .where({cpf})
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
