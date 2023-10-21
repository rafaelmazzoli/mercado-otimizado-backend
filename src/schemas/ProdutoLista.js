const { Schema, model } = require("mongoose");

const ProdutoListaSchema = new Schema(
  {
    lista_mercado: {
      type: Schema.Types.ObjectId,
      ref: "listas_mercado",
      required: true,
    },
    produto: { type: Schema.Types.ObjectId, ref: "produtos", required: true },
    quantidade: { type: Number, required: true },
    metrica_quantidade: { type: String, required: true, lowercase: true },
  },
  { timestamps: true }
);

module.exports = model("produtos_lista", ProdutoListaSchema);
