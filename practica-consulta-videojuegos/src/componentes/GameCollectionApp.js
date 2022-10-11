import React, { useEffect, useState } from "react";
import { GameCollection } from "./GameCollection";
import { GameCollectionAdd } from "./GameCollectionAdd";

export const GameCollectionApp = () => {
  //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.

  let savedGames = JSON.parse(window.localStorage.getItem("games")) || [];
  window.sessionStorage.setItem(
    "ids",
    JSON.stringify(savedGames.map((game) => game.id))
  );
  const [ids, setIds] = useState(savedGames?.map((game) => game.id));

  useEffect(() => {
    window.sessionStorage.setItem("ids", JSON.stringify(ids));
  }, [ids]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <GameCollectionAdd setIds={setIds} />
          <GameCollection
            ids={ids}
            apiKey="8642838e8d18469f8b1e5a8edf833be7"
            setIds={setIds}
          />
        </div>
      </div>
    </>
  );
};
