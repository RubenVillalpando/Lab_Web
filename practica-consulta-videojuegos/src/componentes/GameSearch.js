import React, { useEffect, useState } from "react";
import { GameSearchItem } from "./GameSearchItem";

export const GameSearch = () => {
  let [query, setQuery] = useState("");
  const WINDOW_GAMES = JSON.parse(window.localStorage.games);
  let [games, setGames] = useState(WINDOW_GAMES);

  useEffect(() => {
    setGames(
      WINDOW_GAMES.filter(
        (game) =>
          game.nombre?.toLowerCase().includes(query) ||
          game.id.toString()?.includes(query)
      )
    );
  }, [query]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4 py-4">¡Busca dentro de tu colección de juegos!</h1>
            <input
              style={{ height: 3 + "rem", fontSize: 1.2 + "rem", width: 100+ "%"}}
              type="text"
              value={query}
              placeholder="Busca dentro de tu colección de juegos"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <div className="d-flex flex-wrap justify-content-center">
              {games.map((game) => {
                return <GameSearchItem game={game} />;
              })}
            </div>
        </div>
      </div>
      
    </>
  );
};
