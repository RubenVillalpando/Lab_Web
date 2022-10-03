import React, { memo } from "react";
export const ResultadoContador = memo(({ valor }) => {
  //Este console.log se va llamar cada vez que se cree el componente.
  console.log("Componente creado...");
  return <small>{valor}</small>;
});
