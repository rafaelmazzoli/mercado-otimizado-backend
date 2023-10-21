const { Schema, model } = require("mongoose");

const ListaMercadoSchema = new Schema(
  {
    expectativa_duracao: { type: Number, required: true },
    metrica_expectativa_duracao: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = model("listas_mercado", ListaMercadoSchema);
