import React, { useEffect, useState } from "react";
import { useFetch } from "../customHooks/usefetch";
import { InfoVideojuego } from "./InfoVideojuegos";

export const ResultadoVideojuegos = (props) => {
  const url =
    `https://api.rawg.io/api/games?key=${props.apiKey}&genres=` +
    encodeURI(props.genero);
  const { response, loading } = useFetch(url);

  return (
    <>
      {loading || (
        <>
          <h3 className="card-title mb-3 ml-auto" style={{ width: 100 + "%" }}>
            {props.genero}
          </h3>
          {response.results?.map((infoJuego) => (
            <InfoVideojuego key={infoJuego.name} juego={infoJuego} />
          )) || <p>Error loading</p>}
        </>
      )}
    </>
  );
};
