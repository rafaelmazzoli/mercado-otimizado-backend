const { Schema, model } = require("mongoose");
const stringOperations = require("../modules/stringOperations");

const NomeComumSchema = new Schema(
  {
    nome_comum: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

NomeComumSchema.pre("save", async function (next) {
  //Names
  if (this.isModified("nome_comum")) {
    this.nome_comum = stringOperations.capitalizeText(this.nome_comum);
  }

  next();
});

module.exports = model("nomes_comuns", NomeComumSchema);
