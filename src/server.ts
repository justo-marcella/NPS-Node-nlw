import 'reflect-metadata' 
import express from 'express';
import './database';

const app = express();


/** GET => Busca
 * POST => Salvar
 * Put => Alterar
 * Delete =>
 * Deletar
 * Patch => Alteração específica
*/

app.get("/", (request, response) => {

    return response.json({message: "Hello World - NLW04"});
});

//1 param => rota(recurso api)
//2 param => req, resp

app.post("/", (request, response)=>{
    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
})


app.listen(3333, ()=> console.log("Server is running!"));