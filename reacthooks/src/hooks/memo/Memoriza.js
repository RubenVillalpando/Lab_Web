import React from 'react';
import { useContador } from '../../custom/useContador';
import { ResultadoContador } from './ResultadoContador';
import { useState } from 'react';
export const Memoriza = () => {
 //Utilizamos el custom hook useCounter
 const { state, increment } = useContador(10);
 //Utilizamos un hook useState para controlar el valor de una variable booleana, inicializandola en true.
 const [booleano, setBooleano] = useState(true);
 return (
 <>
    <h1>Memorizar</h1>
    <hr />
    <p>Contador: <ResultadoContador valor={state} /></p>
    <button className="btn btn-primary mt-5" onClick={() => increment(1)}>
        +1
    </button>

    {/*
 Este botón va utilizar y actualizar el estado de la variable 'booleano'
 */}
 <button
 className="btn btn-outline-primary mt-5"
 onClick={() => {
 setBooleano(!booleano);
 }}
 >
 {/*
 Utilizamos JSON.stringify porque los valores booleanos no se muestran en el html
 */}
 Cambia Booleano: {JSON.stringify(booleano)}
 </button>
 </>
 )
}