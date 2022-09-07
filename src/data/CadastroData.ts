import axios from "axios";
import { DADOS, DATA } from "../models/DATA";
import { BaseDatabase } from "./BaseDatabase";



export class CadastroData extends BaseDatabase {

    protected TABLE_NAME = "CADASTRO_NEXT"

    Cadastro = async (dados: DADOS) => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(dados)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    update = async (dados: DATA) => {
        try {
            await this.connection(this.TABLE_NAME)
                .update(dados)
                .where({cpf: dados.cpf})
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    buscaCep = async (cep: string) => {
        try {
            const response = await
                axios.get(`https://viacep.com.br/ws/${cep}/json/`)             
            return response.data
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

}
