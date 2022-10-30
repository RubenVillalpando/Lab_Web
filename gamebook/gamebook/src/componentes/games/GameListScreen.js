import React, { useMemo } from 'react';
import { getGamesByPlatform } from '../../selectores/getGamesByPlatform';
import { GameCard } from './GameCard';
//Vamos a recibir en los props la plataforma de la que queremos obtener la lista de videojuegos.
export const GameListScreen = ({ plataforma }) => {
 const juegos = useMemo(() => getGamesByPlatform(plataforma), [plataforma]);
 return (

 <div className="row row-cols-1 row-cols-md-3 g-4">
 {
 juegos.map(juego => (
 <GameCard key={juego.id}
 juego = {juego}
 />
 ))
 }
 </div>
 )
}