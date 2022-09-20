import React, { useEffect, useState } from 'react'; 
 
export const Mensaje = () => { 
 
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual 
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez. 
    useEffect(() => { 
        console.log('Componente montado...'); 
 
        //Encapsulamos la funcionalidad de las coordenadas en una función. 
        const mouseMove = (e) => { 
            setCoordenadas({x: e.x, y: e.y})
        } 
 
        //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador. Mandamos llamar 
        // la función mouseMove 
        window.addEventListener('mousemove', mouseMove); 
 
        return () => { 
            //Hacemos la limpieza del componente. Removemos el listener que se creó al montar el componente. 
            window.removeEventListener('mousemove', mouseMove); 
            console.log('Componente desmontado...'); 
        } 
    }, []); 

    let [coordenadas, setCoordenadas] = useState({x: 0, y: 0})
 
    return ( 
        <> 
            <h3>Este es un mensaje...</h3> 
            <p>coordenada en x: {coordenadas.x}</p>
            <p>coordenada en y: {coordenadas.y}</p>
        </> 
    ) 
}