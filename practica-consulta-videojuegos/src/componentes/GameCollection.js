import React from "react";
import { GameCollectionItem } from "./GameCollectionItem";

export const GameCollection = (props) => {
  console.log(props);
  const games = JSON.parse(window.localStorage.getItem("games")) || [];
  return (
    <>
      <div class="d-flex flex-wrap">
        {props.ids.map((id) => {
          return (
            <>
              <GameCollectionItem
                key={id}
                id={id}
                ids={props.ids}
                apiKey={props.apiKey}
                games={games}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
