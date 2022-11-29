import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Login = () => {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const doLogin = () => {
    fetch(`${process.env.DB_BASE_URL}/users/login`, {
      method: "GET",
      body: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => setCurrentUser(json.username));
          navigate("/game-collection");
        } else window.alert("usuario o contraseña incorrectos");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container d-flex  flex-wrap flex-column align-items-center justify-content-center login-box">
        <div className="row">
          <h1 className="display-4 login-title text-center">Inicia Sesión</h1>
        </div>
        <div className="row py-2">
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          ></input>
        </div>
        <div className="row py-2">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
          ></input>
        </div>

        <div className="row py-2">
          <button className="btn btn-dark btn-login" onClick={doLogin}>
            ¡Vamos!
          </button>
        </div>
      </div>
    </>
  );
};
