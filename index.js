const express = require("express");
require("dotenv").config();
require("express-async-errors");
var cors = require("cors");

const home = require("./components/home/home");
const readById = require("./components/read-by-id/read-by-id");
const readAll = require("./components/read-all/read-all");
const criar = require("./components/create/create");
const atualizar = require("./components/update/update");
const deletar = require("./components/delete/delete");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.options("*", cors());

app.use("/home", home);

app.use("/personagens/read-all", readAll);

app.use("/personagens/read-by-id", readById);

app.use("/personagens/create", criar);

app.use("/personagens/update", atualizar);

app.use("/personagens/delete", deletar);

app.all("*", function (req, res) {
  res.status(404).send({ message: "Endpoint was not found" });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}/home`);
});
