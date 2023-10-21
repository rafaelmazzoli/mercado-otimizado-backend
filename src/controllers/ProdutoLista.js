const ProdutoLista = require("../schemas/ProdutoLista");

class ProdutoListaController {
  create = async (req, res, next) => {
    try {
      const { lista_mercado, produto, quantidade, metrica_quantidade } =
        req.body;

      const produtoLista = await ProdutoLista.create({
        lista_mercado,
        produto,
        quantidade,
        metrica_quantidade,
      });

      return res.status(201).json(produtoLista);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new ProdutoListaController();
