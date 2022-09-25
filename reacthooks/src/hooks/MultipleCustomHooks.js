import React from 'react';
import { useFetch } from '../custom/useFetch';
import { useContador } from '../custom/useContador';

export const MultipleCustomHooks = () => {

    //Utilizamos el custom hook 'useContador' para incrementar el id del juego que queremos consultar
 const { state, increment } = useContador(1);
 console.log(state);
    //Utilizamos el custom hook 'useFetch'. Desestructuramos la información que devuelve el custom hook.
 const { loading, info } = useFetch('https://api.rawg.io/api/games/' + state + '?key=db2d6f8126054ba6cdbbf5');
 console.log(loading);
 console.log(info);
 //Desestructuramos la información que vamos a utilizar, de info.
 const { name_original, description } = !!info && info;
 console.log(name_original);
 console.log(description);
    return (
    <>
        <h1>Información de Videojuegos</h1>
        <hr />
    {
        loading
            ?
                (
                    //Si loading es true, mostramos el mensaje 'loading'
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>
                )
                :
                (
                    //Si loading es false se muestra la información del juego.
                    <div>
                    {name_original}
                    <br />
                    {description}
                    </div>
                )
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>
            Siguiente Videojuego
            </button>
        </>
    );
   }