import React, {useState} from 'react'; 
import PropTypes from 'prop-types'

export const InfoVideojuego = ({juego})=>{
    const {nombre, imagen, rating, metacritic} = juego

    return (
        <>
            <h1>{nombre}</h1> 
            <img src={imagen}></img>
            <p>rating: {rating}</p>
            <p>metacritic: {metacritic}</p>
        </>
    );

}

InfoVideojuego.propTypes = {
    juego: PropTypes.func.isRequired
}