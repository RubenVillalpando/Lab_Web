import React, { useEffect } from "react";
import { useFetch } from "../customHooks/UseFetch";

export const GameCollectionItem = ({ id, ids, apiKey, games }) => {
  const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  const { response, loading } = useFetch(url);

  const {
    name: nombre,
    background_image: imagen,
    rating,
    metacritic,
  } = response || {};

  useEffect(() => {
    if (response && !games.some((game) => game.id == response?.id)) {
      games.push({
        id: response.id,
        nombre: response.name,
        imagen: response.background_image,
        rating: response.rating,
        metacritic: response.metacritic,
      });
      window.localStorage.setItem("games", JSON.stringify(games));
    }
  }, [response]);

  return (
    <>
      {loading || (
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
      )}
    </>
  );
};
