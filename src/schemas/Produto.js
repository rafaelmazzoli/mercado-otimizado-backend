const { Schema, model } = require("mongoose");

const produtoSchema = new Schema(
  {
    gtin: { type: String, required: true, unique: true },
    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    nome_comum: {
      type: Schema.Types.ObjectId,
      ref: "nomes_comuns",
      required: true,
    },
    peso: { type: Number, required: true },
    metrica_peso: { type: String, required: true, lowercase: true },
    durabilidade: { type: Number, required: false },
    metrica_durabilidade: { type: String, required: false, lowercase: true },
    produto_essencial: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = model("produtos", produtoSchema);
