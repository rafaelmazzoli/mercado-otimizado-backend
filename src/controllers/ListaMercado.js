const ListaMercado = require("../schemas/ListaMercado");

class ListaMercadoController {
  create = async (req, res, next) => {
    try {
      const { expectativa_duracao, metrica_expectativa_duracao } = req.body;

      const listaMercado = await ListaMercado.create({
        expectativa_duracao,
        metrica_expectativa_duracao,
      });

      return res.status(201).json(listaMercado);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new ListaMercadoController();
