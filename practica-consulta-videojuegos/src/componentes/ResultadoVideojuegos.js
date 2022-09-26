import React, { useEffect, useState } from "react";
import { UseFetch } from "../customHooks/useFetch";
import { InfoVideojuego } from "./InfoVideojuegos";

export const ResultadoVideojuegos = (props) => {
  const url =
    `https://api.rawg.io/api/games?key=${props.apiKey}&genres=` +
    encodeURI(props.genero);
  const { juegos, cargando } = UseFetch(url);

  return (
    <>
      {cargando || (
        <>
          <h3 className="card-title mb-3 ml-auto" style={{ width: 100 + "%" }}>
            {props.genero}
          </h3>
          {juegos.map((infoJuego) => (
            <InfoVideojuego key={infoJuego.name} juego={infoJuego} />
          ))}
        </>
      )}
    </>
  );
};
