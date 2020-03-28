const express = require('express');
const cors = require('cors');
const routes = require('./routes');



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * GET: Buscar informações no BackEnd
 * POST: Criar uma informação no BackEnd
 * PUT: Alterar informação no Backend
 * DELETE: deletar uma informação.z
 * 
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após ?  (Filtors, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */
