import express from "express";
import { cadastrarJogo,  } from "./controller/JogoController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

app.post("/api/jogo", cadastrarJogo);
//Cadastrar os endpoints restantes

app.listen(PORT, logInfo);


