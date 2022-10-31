import React from "react";

export const GameSearchItem = ({ game }) => {
  let { imagen, nombre, rating, metacritic } = game;
  return (
    <>
      <div class="card my-3 ml-auto mx-3" style={{ width: 18 + "rem" }}>
        <img src={imagen} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{nombre}</h5>
          <div class="row d-flex flex-wrap">
            <div class="col d-flex flex-wrap text-center">
              <p class="card-text">
                Rating<br></br>
                {rating}
              </p>
            </div>
            <div class="col d-flex flex-wrap text-center">
              <p class="card-text">
                Metacritic<br></br>
                {metacritic}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
