import React, { useState } from "react";

export const useFetch = (url, defaultComponent) => {
  const loadingComponent = defaultComponent || (
    <>
      <p>Cargando...</p>
    </>
  );
  const [state, setState] = useState({
    response: null,
    loading: loadingComponent,
  });

  useState(() => {
    fetch(url)
      .then((response) => {
        console.log("se hizo fetch y se obtuvo una respuesta");
        return response.json();
      })
      .then((json) => {
        setState({
          response: json,
          loading: null,
        });
      });
    return () => {
      setState({
        response: null,
        loading: loadingComponent,
      });
    };
  }, [url]);
  return state;
};
