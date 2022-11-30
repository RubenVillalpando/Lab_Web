import React, { useContext, useEffect, useState } from "react";
import { GameSearchItem } from "./GameSearchItem";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const GameSearch = () => {
  const { currentUser } = useContext(CurrentUserContext);
  let [query, setQuery] = useState("");
  let [games, setGames] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    setGames([]);
    fetch(`http://127.0.0.1:8585/games/search-game-name`, {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: JSON.stringify({
        username: currentUser,
        nombre_juego: query,
      }),
    })
      .then((res) => {
        res.json().then((json) => setGames(json));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 py-4">
            ¡Busca dentro de tu colección de juegos!
          </h1>
          <input
            style={{
              height: 3 + "rem",
              fontSize: 1.2 + "rem",
              width: 100 + "%",
            }}
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
