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
      const { email, password } = req.body;
      console.log(email);
      console.log(req.body);

      const query = { correo_electrónico: email, contraseña: password };
      const usuario = await users.findOne(query);
      const logs = database.collection("logs");
      if (usuario === null) {
        await logs.insertOne({
          username: email,
          fecha_evento: new Date(),
          evento: "Autenticación fallida...",
        });
        return res.status(404).end();
      }
      await logs.insertOne({
        username: usuario.username,
        fecha_evento: new Date(),
        evento: "Autenticación exitosa...",
      });
      console.log("Consulta ejecutada...");
      res.json(usuario);
    }
  );
};
