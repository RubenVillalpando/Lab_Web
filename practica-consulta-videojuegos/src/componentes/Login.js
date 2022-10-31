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
      <p>Usuario:</p>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <p>Contraseña:</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={doLogin}>Log in</button>
    </>
  );
};
