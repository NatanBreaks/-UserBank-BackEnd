import { Request, Response } from "express";
import { AlterarImgBusiness } from "../business/AlterarImgBusiness";


export class AlterarImgController {

    constructor(
        private alterarImgBusiness: AlterarImgBusiness
    ) { }

    alterarImg = async (req: Request, res: Response) => {

        const { cpf, avatar_url } = req.body

        try {
            const ImgsDoUser = await this.alterarImgBusiness.alterarImg(cpf, avatar_url)
            console.log(ImgsDoUser)
            res.status(201).send({
                message: `Dados Recebidos`, ImgsDoUser
            })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }

    }

}