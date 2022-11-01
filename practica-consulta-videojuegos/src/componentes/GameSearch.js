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
      <h1>¡Busca dentro de tu colección de juegos!</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => {
          return <GameSearchItem game={game} />;
        })}
      </div>
    </>
  );
};
