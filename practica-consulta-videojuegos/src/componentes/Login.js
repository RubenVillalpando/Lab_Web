import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Login = () => {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const doLogin = () => {
    console.log(email);
    console.log(password);
    const requestBody = { email: email, password: password };
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch("http://127.0.0.1:8585/users/login", {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
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
