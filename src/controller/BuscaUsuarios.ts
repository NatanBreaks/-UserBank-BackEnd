import { Request, Response } from "express";
import BuscaUsuarioBusiness from "../business/BuscaUsuarioBusiness";


export class BuscaUsusariosController {

    constructor(
        private buscaUsuarioBusiness: BuscaUsuarioBusiness
    ) { }

    pegarCadastro = async (req: Request, res: Response) => {

        try {
            const Detalhes = await this.buscaUsuarioBusiness.DetalhesCadastro()
            res.status(201).send({Detalhes})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}