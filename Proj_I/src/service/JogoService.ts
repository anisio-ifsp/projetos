import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";
export class JogoService{

    jogoRepository: JogoRepository = new JogoRepository();

    cadastrarJogo(jogoData: any): Jogo {
        const { nome, categoria, ano } = jogoData;
        if(!nome || !categoria || !ano ){
            throw new Error("Informações incompletas");
        }
        const novoJogo = new Jogo(nome,categoria,ano);
        this.jogoRepository.insereJogo(novoJogo);
        return novoJogo;
    }

    //implemente os outros métodos do CRUD

}