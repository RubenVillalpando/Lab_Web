import React, { useContext, useEffect } from "react";
import { useFetch } from "../customHooks/useFetch";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const GameCollectionItem = ({ id }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const url = `https://api.rawg.io/api/games/${id}?key=d9080123cda745c2880f8f8322939d72`;
  const { response, loading } = useFetch(url);

  const {
    name: nombre,
    background_image: imagen,
    rating,
    metacritic,
  } = response || {};

  // useEffect(() => {
  //   if (response) {
  //     games.push({
  //       id: response.id,
  //       nombre: response.name,
  //       imagen: response.background_image,
  //       rating: response.rating,
  //       metacritic: response.metacritic,
  //     });
  //   }
  // }, [response]);

  const handleDelete = (e) => {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    fetch(`http://127.0.0.1:8585/games`, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({
        username: currentUser,
        id_juego: e.target.id,
      }),
    })
      .then((res) => {
        if (res.ok) console.log(`game with id ${e.target.id} deleted`);
        else console.log(`Error: server responded with code ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading || (
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
              <div className="col d-flex flex-wrap justify-content-end deletebtn">
                <button className="btn" onClick={handleDelete} id={id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
