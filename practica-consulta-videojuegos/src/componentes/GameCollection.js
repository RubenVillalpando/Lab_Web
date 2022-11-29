import React, { useContext, useEffect, useState } from "react";
import { GameCollectionItem } from "./GameCollectionItem";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const GameCollection = () => {
  let { currentUser } = useContext(CurrentUserContext);
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(`mongodb://127.0.0.1:27017/games/${currentUser}`, {
      method: "GET",
    })
      .then((res) => {
        res.json().then((json) => setGames(json));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => {
          return (
            <>
              <GameCollectionItem id={game.id_juego} />
            </>
          );
        })}
      </div>
    </>
  );
};
