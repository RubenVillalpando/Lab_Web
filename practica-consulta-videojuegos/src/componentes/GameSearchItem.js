import React from "react";
import { useFetch } from "../customHooks/useFetch";

export const GameSearchItem = ({ game }) => {
  let { nombre_juego, id_juego } = game;
  const url = `https://api.rawg.io/api/games/${id_juego}?key=d9080123cda745c2880f8f8322939d72`;
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
