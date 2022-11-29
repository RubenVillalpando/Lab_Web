"use strict";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "info_videojuegos";

exports.obtener_logs_usuario = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      const database = mdbclient.db(dbName);

      const logs = database.collection("logs");
      let user = req.body.username;

      const query = { username: user };
      const usuario = await logs.find(query);
      console.log("Consulta ejecutada...");
      res.end(JSON.stringify(usuario));
    }
  );
};

exports.obtener_logs_rango_fechas = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      const database = mdbclient.db(dbName);

      const logs = database.collection("logs");
      let date1 = req.body.fecha_evento1;
      let date2 = req.body.fecha_evento2;

      const query = {
        fecha_evento: {
          $gte: ISODate(date1),
          $lt: ISODate(date2),
        },
      };

      const result = await logs.find(query);
      console.log("Consulta ejecutada...");
      res.end(JSON.stringify(result));
    }
  );
};

exports.obtener_logs_usuario_evento = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      const database = mdbclient.db(dbName);

      const logs = database.collection("logs");
      let user = req.body.username;
      let event = req.body.evento;

      const query = { username: user, evento: { $regex: event } };
      const usuario = await logs.find(query);
      console.log("Consulta ejecutada...");
      res.end(JSON.stringify(usuario));
    }
  );
};

exports.agregar_evento = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        res.status(500).end();
      }
      const database = mdbclient.db(dbName);
      const logs = database.collection("logs");
      let user = req.body.username;
      let event = req.body.evento;

      await logs.insertOne({
        username: user,
        fecha_evento: new Date(),
        evento: event,
      });
      console.log("Evento registrado...");
      res.status(200).end();
    }
  );
};
