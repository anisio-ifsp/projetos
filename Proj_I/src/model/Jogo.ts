export class Jogo{
    id:number;
    nome:string;
    categoria:string;
    ano:number;

    //Crie um construtor que utilize o método gerarId

    private geraId():number{
        return Date.now();
    }
}