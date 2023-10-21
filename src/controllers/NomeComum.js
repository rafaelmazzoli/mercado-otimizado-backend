const NomeComum = require("../schemas/NomeComum");

class NomeComumController {
  create = async (req, res, next) => {
    try {
      const { nome_comum } = req.body;

      const nomeComum = await NomeComum.create({
        nome_comum,
      });

      return res.status(201).json(nomeComum);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new NomeComumController();
