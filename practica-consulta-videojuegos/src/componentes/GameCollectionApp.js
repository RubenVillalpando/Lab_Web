import React, { useEffect, useState } from "react";
import { GameCollection } from "./GameCollection";
import { GameCollectionAdd } from "./GameCollectionAdd";

export const GameCollectionApp = () => {
  const [games, setGames] = useState([]);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <GameCollectionAdd games={games} setGames={setGames} />
          <GameCollection games={games} setGames={setGames} />
        </div>
      </div>
    </>
  );
};
