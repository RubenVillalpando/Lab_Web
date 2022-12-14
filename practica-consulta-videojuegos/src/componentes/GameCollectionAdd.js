import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../customHooks/useFetch";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const GameCollectionAdd = ({ games, setGames }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [textInput, setTextInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let numInput = Number(textInput);
    if (!isNaN(numInput) && numInput > 0) {
      fetch(
        `https://api.rawg.io/api/games/${numInput}?key=d9080123cda745c2880f8f8322939d72`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          res.json().then((game) => {
            const myHeaders = new Headers();
            setGames([
              ...games,
              {
                username: currentUser,
                id_juego: textInput,
                nombre_juego: game.name,
                plataforma_juego: game.platforms.length
                  ? game.platforms[0].name
                  : "",
                comentario: "",
              },
            ]);
            myHeaders.append("Content-Type", "application/json");
            fetch(`http://127.0.0.1:8585/games`, {
              method: "POST",
              mode: "cors",
              headers: myHeaders,
              body: JSON.stringify({
                username: currentUser,
                id_juego: textInput,
                nombre_juego: game.name,
                plataforma_juego: game.platforms.length
                  ? game.platforms[0].name
                  : "",
                comentario: "",
              }),
            })
              .then((res) => {
                if (res.ok) {
                  setGames([]);
                  console.log("added game successfully");
                } else {
                  console.log(`Error: unexpected status ${res.status}`);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else window.alert("input must be a number greater than 0");
    setTextInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm my-3">
        <input
          style={{ height: 3 + "rem", fontSize: 1.2 + "rem" }}
          type="text"
          value={textInput}
          placeholder="Introduce el ID de un juego (ej: 1)"
          onChange={(e) => setTextInput(e.target.value)}
          className="form-control"
        />
        <button
          className="btn btn-dark"
          type="submit"
          style={{ fontSize: 1.2 + "rem", width: 6 + "rem" }}
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
