import React, { useEffect, useState } from "react";

export const UseFetch = (url) => {
  const componenteCargando = (
    <>
      <p>Cargando...</p>
    </>
  );
  const [state, setState] = useState({
    juegos: null,
    cargando: componenteCargando,
  });

  useEffect(() => {
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((juegosObj) => {
        setState({
          juegos: juegosObj.results,
          cargando: null,
        });
      });
    return () => {
      setState({
        juegos: null,
        cargando: componenteCargando,
      });
    };
  }, [url]);
  return state;
};
