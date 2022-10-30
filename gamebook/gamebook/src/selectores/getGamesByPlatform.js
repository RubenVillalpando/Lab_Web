import { juegos } from '../datos/juegos';
export const getGamesByPlatform = (plataforma) => {
 const plataformas = ['PlayStation','Xbox','Nintendo Switch','PC'];
  //Si la plataforma indicada no existe en el arreglo, mandamos el error correspondiente
  if(!plataformas.includes(plataforma)){
    throw new Error(`La plataforma "${plataforma}" no se encuentra registrada en la aplicación.`);
    }
    //Regresamos los juegos que pertenezcan a la plataforma indicada
    return juegos.filter(juego => juego.plataforma === plataforma);
   }
