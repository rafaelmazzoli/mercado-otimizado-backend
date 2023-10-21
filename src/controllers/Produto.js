const Produto = require("../schemas/Produto");

class ProdutoController {
  create = async (req, res, next) => {
    try {
      const {
        gtin,
        sku,
        nome_comum,
        peso,
        metrica_peso,
        durabilidade,
        metrica_durabilidade,
        produto_essencial,
      } = req.body;

      const produto = await Produto.create({
        gtin,
        sku,
        nome_comum,
        peso,
        metrica_peso,
        durabilidade,
        metrica_durabilidade,
        produto_essencial,
      });

      return res.status(201).json(produto);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new ProdutoController();
