"use strict";

var fs = require("fs");

module.exports.obtener_juegos = function (req, res) {
  fs.readFile(
    __dirname + "/" + "juegos.json",
    { encoding: "utf-8" },
    function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
};

module.exports.agregar_juego = function (req, res) {
  fs.readFile(
    __dirname + "/" + "juegos.json",
    { encoding: "utf-8" },
    function (err, data) {
      if (err) {
        console.log("error leyendo el archivo juegos.json", err);
        res.status(500).end();
      } else {
        const array = JSON.parse(data);
        console.log(data);

        const nuevo = req.body;
        array.push(nuevo);

        fs.writeFile(
          __dirname + "/" + "juegos.json",
          JSON.stringify(array),
          "utf8",
          function (err, data) {
            console.log(err);
            res.end(err);
          }
        );

        res.end(JSON.stringify(array));
      }
    }
  );
};

module.exports.obtener_juego = function (req, res) {
  fs.readFile(
    __dirname + "/" + "juegos.json",
    { encoding: "utf-8" },
    function (err, data) {
      if (err) {
        console.log("error leyendo el archivo juegos.json", err);
        res.status(500).end();
      } else {
        const juegos = JSON.parse(data);
        const juego = juegos[req.params.gameIndex];
        console.log(juego);
        res.send(JSON.stringify(juego));
      }
    }
  );
};

module.exports.borrar_juego = function (req, res) {
  fs.readFile(
    __dirname + "/" + "juegos.json",
    { encoding: "utf-8" },
    function (err, data) {
      console.log("El juego a borrar es el juego con id: ", req.params.gameId);
      if (err) {
        console.log("error leyendo el archivo juegos.json", err);
        res.status(500).end();
      } else {
        const juegos = JSON.parse(data);
        const juegoPorBorrar = juegos.find(
          (juego) => juego.id === req.params.gameId
        );
        if (!juegoPorBorrar) {
          console.log("no se encontró el juego con id: ", req.params.gameId);
        }
        fs.writeFile(
          __dirname + "/" + "juegos.json",
          JSON.stringify(
            juegos.filter((juego) => juego.id !== req.params.gameId)
          ),
          {
            encoding: "utf-8",
          },
          function (err, data) {
            if (err) {
              console.log("error encountered:", err);
              res.status(500).end();
            } else {
              console.log("se borró el juego:", juegoPorBorrar);
              res.status(200).json(juegoPorBorrar || {});
            }
          }
        );
      }
    }
  );
};

module.exports.buscar_juegos = function (req, res) {
  fs.readFile(
    __dirname + "/" + "juegos.json",
    { encoding: "utf-8" },
    function (err, data) {
      console.log("El query a buscar es: ", req.params.query);
      if (err) {
        console.log("error leyendo el archivo juegos.json", err);
        res.status(500).end();
      } else {
        let juegos = JSON.parse(data);
        let juegosEncontrados = juegos.filter((juego) =>
          juego.nombre.includes(req.params.query)
        );
        if (!juegosEncontrados.length) {
          console.log(
            "Ningún juego se encontró con el query:",
            req.params.query
          );
        }
        res.json(juegosEncontrados);
      }
    }
  );
};
