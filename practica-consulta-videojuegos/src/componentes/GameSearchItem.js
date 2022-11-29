import React from "react";
import { useFetch } from "../customHooks/useFetch";

export const GameSearchItem = ({ game }) => {
  let { nombre_juego, id_juego } = game;
  const url = `https://api.rawg.io/api/games/${id_juego}?key=${process.env.RAWG_API_KEY}`;
  let { response, loading } = useFetch(url);

  return (
    loading || (
      <>
        <div className="card my-3 ml-auto mx-3" style={{ width: 18 + "rem" }}>
          <img
            src={response.background_image}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{response.name}</h5>
            <div className="row d-flex flex-wrap">
              <div className="col d-flex flex-wrap text-center">
                <p className="card-text">
                  Rating<br></br>
                  {response.rating}
                </p>
              </div>
              <div className="col d-flex flex-wrap text-center">
                <p className="card-text">
                  Metacritic<br></br>
                  {response.metacritic}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};
