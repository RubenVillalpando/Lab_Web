import React from 'react';
import { Link } from 'react-router-dom';
export const GameCard = ({ juego }) => {
 return (
 <div className="col">
 <div className="card" style={{ maxWidth: 500 }}>
 <img src={`./assets/${juego.id}.jpg`} className="card-img-top" alt={juego.id} />
 <div className="card-body">
 <h5 className="card-title">{juego.nombre}</h5>
 <p className="card-text">{juego.developer}</p>
 <p className="card-text">{juego.personaje_principal}</p>
 <Link to={`/game/${juego.id}`}>
 Detalle
 </Link>
 </div>
 </div>
 </div>
 )
}