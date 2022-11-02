import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Login = () => {
  const navigate = useNavigate();
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let { setCurrentUser } = useContext(CurrentUserContext);

  const doLogin = () => {
    if (user === "vivaelhardcode" && password === "hardcode123") {
      setCurrentUser(user);
      navigate("/");
    } else window.alert("Usuario o contraseña incorrectos");
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
            value={user}
            placeholder="Usuario"
            onChange={(e) => setUser(e.target.value)}
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
        <button className="btn btn-dark btn-login" onClick={doLogin}>¡Vamos!</button>
      </div>
    </div> 
    </>
  );
};
