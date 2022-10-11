import React from "react";
import { GameCollectionItem } from "./GameCollectionItem";

export const GameCollection = (props) => {
  console.log(props);
  const games = JSON.parse(window.localStorage.getItem("games")) || [];
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {props.ids.map((id) => {
          return (
            <>
              <GameCollectionItem
                key={id}
                id={id}
                setIds={props.setIds}
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
