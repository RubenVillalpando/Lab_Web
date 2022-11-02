import React from "react";

export const GameSearchItem = ({ game }) => {
  let { imagen, nombre, rating, metacritic } = game;
  return (
    <>
      <div className="card my-3 ml-auto mx-3" style={{ width: 18 + "rem" }}>
        <img src={imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <div className="row d-flex flex-wrap">
            <div className="col d-flex flex-wrap text-center">
              <p className="card-text">
                Rating<br></br>
                {rating}
              </p>
            </div>
            <div className="col d-flex flex-wrap text-center">
              <p className="card-text">
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
