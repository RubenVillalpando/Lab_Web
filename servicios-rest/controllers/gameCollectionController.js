"use strict";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "info_videojuegos";

exports.obtener_juegos_usuario = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      const database = mdbclient.db(dbName);

      const videogames = database.collection("videogame_collection");
      let user = req.params.username;

      const query = { username: user };

      const usuario = await videogames.find(query);
      console.log("Consulta ejecutada...");
      return res.json(await usuario.toArray());
    }
  );
};

exports.obtener_juego_por_nombre_usuario = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      const database = mdbclient.db(dbName);

      const videogames = database.collection("videogame_collection");
      let user = req.body.username;
      let gameName = req.body.nombre_juego;
      console.log("GameName", gameName);

      const query = {
        username: user,
        nombre_juego: { $regex: new RegExp(gameName, "i") },
      };

      const juego = await videogames.find(query);
      console.log("Consulta ejecutada...");
      return res.json(await juego.toArray());
    }
  );
};

exports.obtener_juegos_por_consola_usuario = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      const database = mdbclient.db(dbName);

      const videogames = database.collection("videogame_collection");
      let user = req.body.username;
      let consoleName = req.body.plataforma_juego;

      const query = {
        username: user,
        plataforma_juego: { $regex: new RegExp(consoleName, "i") },
      };

      const juegos = await videogames.find(query);
      console.log("Consulta ejecutada...");
      return res.json(await juegos.toArray());
    }
  );
};

exports.agregar_juego_usuario = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      const database = mdbclient.db(dbName);

      const videogames = database.collection("videogame_collection");

      let user = req.body.username;
      let gameID = req.body.id_juego;
      let gameName = req.body.nombre_juego;
      let consoleName = req.body.plataforma_juego;
      let comment = req.body.comentario;

      const game = await videogames.insertOne({
        username: user,
        id_juego: gameID,
        nombre_juego: gameName,
        plataforma_juego: consoleName,
        comentario: comment,
      });

      if (!game) {
        return res.status(500).end();
      }

      const logs = database.collection("logs");
      await logs.insertOne({
        username: user,
        fecha_evento: new Date(),
        evento: "Juego agregado...",
      });
      console.log("Juego registrado...");
      return res.status(200).end();
    }
  );
};

exports.borrar_juego = function (req, res) {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async function (err, mdbclient) {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      const database = mdbclient.db(dbName);
      const videogames = database.collection("videogame_collection");
      let user = req.body.username;
      let gameID = req.body.id_juego;

      let response = await videogames.deleteOne({
        username: user,
        id_juego: gameID,
      });
      if (response.deletedCount) {
        return res.status(500).end();
      }
      const logs = database.collection("logs");
      await logs.insertOne({
        username: user,
        fecha_evento: new Date(),
        evento: "Juego eliminado...",
      });
      console.log("Juego eliminado...");
      return res.status(200).end();
    }
  );
};

// module.exports.obtener_juegos = function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "juegos.json",
//     { encoding: "utf-8" },
//     function (err, data) {
//       if (err) {
//         console.log(err);
//         res.status(500).end();
//       } else {
//         console.log(data);
//         res.send(data);
//       }
//     }
//   );
// };

// module.exports.agregar_juego = function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "juegos.json",
//     { encoding: "utf-8" },
//     function (err, data) {
//       if (err) {
//         console.log("error leyendo el archivo juegos.json", err);
//         res.status(500).end();
//       } else {
//         const array = JSON.parse(data);
//         console.log(data);

//         const nuevo = req.body;
//         array.push(nuevo);

//         fs.writeFile(
//           __dirname + "/" + "juegos.json",
//           JSON.stringify(array),
//           "utf8",
//           function (err, data) {
//             console.log(err);
//             res.end(err);
//           }
//         );

//         res.end(JSON.stringify(array));
//       }
//     }
//   );
// };

// module.exports.obtener_juego = function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "juegos.json",
//     { encoding: "utf-8" },
//     function (err, data) {
//       if (err) {
//         console.log("error leyendo el archivo juegos.json", err);
//         res.status(500).end();
//       } else {
//         const juegos = JSON.parse(data);
//         const juego = juegos[req.body.gameIndex];
//         console.log(juego);
//         res.send(JSON.stringify(juego));
//       }
//     }
//   );
// };

// module.exports.borrar_juego = function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "juegos.json",
//     { encoding: "utf-8" },
//     function (err, data) {
//       console.log("El juego a borrar es el juego con id: ", req.body.gameId);
//       if (err) {
//         console.log("error leyendo el archivo juegos.json", err);
//         res.status(500).end();
//       } else {
//         const juegos = JSON.parse(data);
//         const juegoPorBorrar = juegos.find(
//           (juego) => juego.id === req.body.gameId
//         );
//         if (!juegoPorBorrar) {
//           console.log("no se encontr?? el juego con id: ", req.body.gameId);
//         }
//         fs.writeFile(
//           __dirname + "/" + "juegos.json",
//           JSON.stringify(
//             juegos.filter((juego) => juego.id !== req.body.gameId)
//           ),
//           {
//             encoding: "utf-8",
//           },
//           function (err, data) {
//             if (err) {
//               console.log("error encountered:", err);
//               res.status(500).end();
//             } else {
//               console.log("se borr?? el juego:", juegoPorBorrar);
//               res.status(200).json(juegoPorBorrar || {});
//             }
//           }
//         );
//       }
//     }
//   );
// };

// module.exports.buscar_juegos = function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "juegos.json",
//     { encoding: "utf-8" },
//     function (err, data) {
//       console.log("El query a buscar es: ", req.body.query);
//       if (err) {
//         console.log("error leyendo el archivo juegos.json", err);
//         res.status(500).end();
//       } else {
//         let juegos = JSON.parse(data);
//         let juegosEncontrados = juegos.filter((juego) =>
//           juego.nombre.includes(req.body.query)
//         );
//         if (!juegosEncontrados.length) {
//           console.log("Ning??n juego se encontr?? con el query:", req.body.query);
//         }
//         res.json(juegosEncontrados);
//       }
//     }
//   );
// };
