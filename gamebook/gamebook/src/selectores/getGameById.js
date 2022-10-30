import { juegos } from '../datos/juegos';
export const getGameById = (id) => {
 //Regresamos el juego que corresponda al id
 return juegos.find(juego => juego.id === id);
}