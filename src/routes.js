const { Router } = require("express");
const Produto = require("./controllers/Produto");
const ProdutoLista = require("./controllers/ProdutoLista");
const ListaMercado = require("./controllers/ListaMercado");
const NomeComum = require("./controllers/NomeComum");

const routes = Router();

// Produto
routes.post("/produto", Produto.create);

// ProdutoLista
routes.post("/produto_lista", ProdutoLista.create);

// ListaMercado
routes.post("/lista_mercado", ListaMercado.create);

// NomeComum
routes.post("/nome_comum", NomeComum.create);

module.exports = routes;
