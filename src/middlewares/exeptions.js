module.exports = function (err, req, res, next) {
  console.log(err);
  if (err.message) return res.status(400).send(err.message);
  return res.status(500).send("Erro Interno no Servidor");
};
