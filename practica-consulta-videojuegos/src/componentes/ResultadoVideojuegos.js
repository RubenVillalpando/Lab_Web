import React, {useEffect, useState} from 'react'; 
import { InfoVideojuego } from './InfoVideojuegos';


  export const ResultadoVideojuegos = (props) => { 
      useEffect( () => { 
         getVideojuegos(); 
      }); 
 
      const [infoJuegos, setInfoJuegos] = useState([]); 
 
      const getVideojuegos = async() => { 
         const url = `https://api.rawg.io/api/games?key=${props.apiKey}&genres=` + encodeURI(props.genero); 

         const respuesta = await fetch(url); 
         const {results} = await respuesta.json(); 
         const juegos = results.map( juego =>{ 
            return{ 
               id: juego.id, 
               nombre: juego.name, 
               imagen: juego.background_image, 
               rating: juego.rating, 
               metacritic: juego.metacritic 
            } 
         }); 
         console.log(juegos); 
         setInfoJuegos(juegos); 
      } 

   return( 
   <> 
      <h3 className="card-title">{props.genero}</h3> 
      {/* 
   Creamos la lista de juegos con la información que recuperamos de la invocación del api de RAWG, 
   utilizando la variable infoJuegos que obtuvimos en la desestructuración del hook useState. 
      */} 
         { 
            infoJuegos.map((infoJuego) =>  
               <InfoVideojuego 
                  juego={infoJuego}
               />
            )
         }
   </> 
   ) 
} 