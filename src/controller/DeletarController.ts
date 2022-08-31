import { Request, Response } from "express";
import DeletarBusiness from "../business/DeletarBusiness";


export class DeletarController {

    constructor(
        private deletarBusiness: DeletarBusiness
    ) { }

    delete = async (req: Request, res: Response) => {

        const { cpf } = req.params

        try {
            const pegarCPF = await this.deletarBusiness.delete(cpf)
            res.status(201).send({
                message: `Usuario Deletado`, pegarCPF
            })
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}