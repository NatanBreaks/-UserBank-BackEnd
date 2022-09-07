import { Request, Response } from "express";
import { CadastroBussiness } from "../business/CadastroBussines";
import { DATA } from "../models/DATA";

export class CadastroController {

    constructor(
        private cadastroBussines: CadastroBussiness
    ) { }

    cadastro = async (req: Request, res: Response) => {

        const { nome, cpf, data_nascimento, saldo, limite, cep, logradouro, bairro, numero, cidade, uf, avatar_url } = req.body

        const DadosSolicitados: DATA = {
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
        }

        try {
            const DadosUsuarios = await this.cadastroBussines.cadastro(DadosSolicitados)
            res.status(201).send({
                message: `Dados adicionado`, DadosUsuarios
            })
        } catch (error: any) {
            res.status(error.statusCode || 500)
            .send({
                message: error.message
            })
        }

    }

    update = async (req: Request, res: Response) => {

        const { nome, cpf, data_nascimento, saldo, limite, cep, logradouro, bairro, numero, cidade, uf, avatar_url } = req.body

        const DadosSolicitados: DATA = {
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
        }

        try {
            const DadosUsuarios = await this.cadastroBussines.update(DadosSolicitados)
            res.status(201).send({
                message: `Dados adicionado`, DadosUsuarios
            })
        } catch (error: any) {
            res.status(error.statusCode || 500)
            .send({
                message: error.message
            })
        }

    }

    buscaCep = async (req: Request, res: Response) => {

        const cep = req.params.cep
        try {
            const Bcep = await 
            this.cadastroBussines.buscaCep(cep)         
            res.status(200).send({
                message: `Cep recebido`, Bcep
            })
        } catch (error: any) {
            throw new Error(error.message || "erro inesperado");
        }
    }
}