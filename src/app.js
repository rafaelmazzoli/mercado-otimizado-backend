const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const volleyball = require("volleyball");

require("dotenv/config");

const exeptions = require("./middlewares/exeptions");
const mongoose = require("mongoose");
const routes = require("./routes");

class App {
  constructor() {
    this.app = express();
    this.startMiddlewares();
    this.startProduction();
    this.connectDatabase();
  }

  startMiddlewares = () => {
    //Body Parser to Json Format
    this.app.use(express.json());
    //Body Parser to URLenconded Format
    this.app.use(express.urlencoded({ extended: true }));
    //Console Log for Requests
    this.app.use(volleyball);
    //Cors Enable Hosts to access Requests
    this.app.use(cors());
    //Custom Routes
    this.app.use(routes);
    //Log Errors Globally
    this.app.use(exeptions);
  };

  startProduction = () => {
    if (process.env.NODE_ENV !== "production") return;

    //Inicia bibliotecas de produção
    this.app.use(helmet());
    this.app.use(compression());
  };

  connectDatabase = async () => {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}`
    );
    console.log("Conectado ao banco de dados");
  };
}

module.exports = new App().app;
