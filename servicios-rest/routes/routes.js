//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";

module.exports = function (app) {
  const gameCollection = require("../controllers/gameCollectionController");
  const users = require("../controllers/usersController");
  const logs = require("../controllers/logsController");

  app.route("/games/:username").get(gameCollection.obtener_juegos_usuario);
  app.route("/games").post(gameCollection.agregar_juego_usuario);
  app
    .route("/games/search-game-name")
    .post(gameCollection.obtener_juego_por_nombre_usuario);
  app
    .route("/games/search-console-name/")
    .post(gameCollection.obtener_juegos_por_consola_usuario);

  app.route("/games").delete(gameCollection.borrar_juego);

  app.route("/users/login").post(users.obtener_usuario_email);

  app.route("/logs/:username").get(logs.obtener_logs_usuario);
  app.route("/logs").post(logs.agregar_evento);
  app
    .route("/logs/search-event/:username")
    .get(logs.obtener_logs_usuario_evento);
  app.route("/logs/v1/search-date-range").get(logs.obtener_logs_rango_fechas);

  // app.route("/games/:gameIndex").get(gameCollection.obtener_juego);

  // app.route("/games/search/:query").get(gameCollection.buscar_juegos);
};
