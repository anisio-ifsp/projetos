import { Request, Response } from "express";
import { JogoService } from "../service/JogoService";
const jogoService = new JogoService();

export function cadastrarJogo (req: Request, res: Response){
    try {
        const novoJogo = jogoService.cadastrarJogo(req.body);
        res.status(201).json(
            {
                mensagem:"Jogo adicionado com sucesso!",
                jogo:novoJogo
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

//Desenvolver as outras funções