import { Request, Response } from "express";
import { CadastroData } from "../data/CadastroData";
import { DATA, DADOS } from "../models/DATA";


export class CadastroBussiness {

    constructor(
        private cadastroData: CadastroData,
    ) { }


    cadastro = async (campos: DATA) => {

        const { nome, cpf, data_nascimento, saldo, limite, cep, logradouro, bairro, numero, cidade, uf, avatar_url } = campos

        try {

            if (!nome || !cpf || !data_nascimento) {
                throw new Error("Enter a User data");
            }
            if (!cep) {
                throw new Error("Enter a zip code");
            }

            const dadosDeCadastro = new DADOS(
                nome,
                cpf,
                data_nascimento,
                saldo,
                limite,
                cep,
                logradouro,
                bairro,
                numero,
                cidade,
                uf,
                avatar_url
            )

            await this.cadastroData.Cadastro(dadosDeCadastro)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    buscaCep =async (cep: string) => {
        try {
            const Bcep = await 
            this.cadastroData.buscaCep(cep)
            return Bcep
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}