import { Jogo } from "../model/Jogo";

export class JogoRepository{
    jogoList: Jogo[] = [];

    insereJogo(jogo: Jogo){
        this.jogoList.push(jogo);
    }

    //Desenvolver os outros métodos

}