"use strict";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "info_videojuegos";

exports.obtener_usuario_email = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      const database = mdbclient.db(dbName);

      const users = database.collection("users");
      let email = req.body.correo_electrónico;

      const query = { correo_electrónico: email };
      const usuario = await users.find(query);
      console.log("Consulta ejecutada...");
      res.json(usuario);
    }
  );
};
