import React, { useMemo, useState } from "react";

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

  useMemo(() => {
    fetch(url)
      .then((respuesta) => {
        console.log("se hizo fetch y se obtuvo una respuesta");
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
