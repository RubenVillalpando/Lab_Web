import React from 'react';
//Componente hijo que recibe como parámetro la función que se va utilizar para incrementar el contador.
export const MuestraIncremento = React.memo(({ incrementFn }) => {
 //Mandamos a consola un mensaje cada vez que se genere este componente.
 console.log('Componente creado...');
 return (
 <button
 className="btn btn-primary"
 onClick={() => {
 //Pasamos como parámetro 5 a la función.
 incrementFn(5);
 }}
 >
 Incrementar
 </button>
 )
}
);