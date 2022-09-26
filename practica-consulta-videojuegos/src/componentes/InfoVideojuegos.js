import React, { useState } from "react";
import PropTypes from "prop-types";

export const InfoVideojuego = ({ juego }) => {
  const { name: nombre, background_image: imagen, rating, metacritic } = juego;

  return (
    <>
      <div class="card mb-3 ml-auto mx-3" style={{ width: 18 + "rem" }}>
        <img src={imagen} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{nombre}</h5>
          <div class="row">
            <div class="col">
              <p class="card-text">Rating: {rating}</p>
            </div>
            <div class="col">
              <p class="card-text">Metacritic: {metacritic}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

InfoVideojuego.propTypes = {
  juego: PropTypes.func.isRequired,
};
