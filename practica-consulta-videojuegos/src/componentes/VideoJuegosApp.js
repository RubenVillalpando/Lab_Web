import React, { useState } from "react";
import { AgregaGenero } from "./AgregaGenero";
import { ResultadoVideojuegos } from "./ResultadoVideojuegos";

export const VideojuegosApp = () => {
  const [generos, setGeneros] = useState([]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 py-4">Gamebook</h1>
          <p className="lead">
            ¡Bienvenido a la página donde podrás consultar información de
            videojuegos!
          </p>
          <AgregaGenero setGeneros={setGeneros} />
          <div className="d-flex flex-wrap">
            {generos.map((genero) => {
              return (
                <ResultadoVideojuegos
                  key={genero}
                  genero={genero}
                  apiKey={"8642838e8d18469f8b1e5a8edf833be7"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
