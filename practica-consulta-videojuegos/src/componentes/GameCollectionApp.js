import React, { useEffect, useState } from "react";
import { GameCollection } from "./GameCollection";
import { GameCollectionAdd } from "./GameCollectionAdd";

export const GameCollectionApp = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <GameCollectionAdd />
          <GameCollection />
        </div>
      </div>
    </>
  );
};
