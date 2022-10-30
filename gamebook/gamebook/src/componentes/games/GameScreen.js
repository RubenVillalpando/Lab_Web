import React, { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router';
import { getGameById } from '../../selectores/getGameById';
export const GameScreen = () => {
 const { gameId } = useParams();
 const navigate = useNavigate();
 const juego = useMemo(() => getGameById(gameId), [gameId]);
 //Si no existe el juego, redirigimos a una ruta que podría ser para mostrar un error, pero en este caso
 //vamos a redirigirlo a raiz.
 if (!juego) {
 navigate("/");
 }
 //Función para regresar a la pagina anterior
 const handleRegresar = () => {
 navigate(-1);
 }
 //Desestructuramos el juego
 const { id, nombre, plataforma, developer, personaje_principal } = juego;
 return (
    <>
 <img src={`../assets/${juego.id}.jpg`} alt={juego.id} />
 <div className="card-body">
 <h5 className="card-title">{juego.nombre}</h5>
 <p className="card-text">{juego.developer}</p>
 <p className="card-text">{juego.personaje_principal}</p>
 <button className="btn btn-outline-info"
 onClick={handleRegresar}>
 Regresar
 </button>
 </div>
 </>
 )
}