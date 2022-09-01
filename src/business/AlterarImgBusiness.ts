import { Request, Response } from "express";
import { AlterarImgData } from "../data/AlterarImgData";
import { DATA, DADOS } from "../models/DATA";


export class AlterarImgBusiness {

    constructor(
        private alterarImgData: AlterarImgData,
    ) { }


    alterarImg = async (cpf: string, avatar_url: string) => {
        try {
            if (!avatar_url) {
                throw new Error("Enter a User Avatar URL");
            }

            const CPF = cpf
            const Avatar = avatar_url

            await this.alterarImgData.alterarImg(CPF, Avatar)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}