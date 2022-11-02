import React, { useState } from "react";
import { AgregaGenero } from "./AgregaGenero";
import { ResultadoVideojuegos } from "./ResultadoVideojuegos";

export const VideojuegosApp = () => {
  //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.

  const [generos, setGeneros] = useState([]);

  {
    /*Se elimina la función agregaGenero*/
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 py-4">Gamebook</h1>
          <p className="lead">
            ¡Bienvenido a la página donde podrás consultar información de
            videojuegos!
          </p>
          {/* 
                    Creamos una propiedad 'setGeneros' al componente AgregaGenero y le pasamos como valor la 
                    referencia de la función 'setGeneros' que obtuvimos en la desestructuración del useState 
                    */}
          <AgregaGenero setGeneros={setGeneros} />

          {/*Se eliminó el botón*/}

          {/* 
                    Creamos la lista de géneros 
                    */}
          <div className="d-flex flex-wrap">
            {generos.map((genero) => {
              //Reemplazamos el elemento <li> por la llamda al componente ResultadoVideojuegos, pasando
              // como parámetro el género. Se tiene que utilizar la propiedad key al igual que se hizo
              // con el elemento <li> anteriormente
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
