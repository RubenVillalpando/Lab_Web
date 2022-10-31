import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../componentes/Login";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";
import { GameTabsRouter } from "./GameTabsRouter";

export const MainRouter = () => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<GameTabsRouter />} />
        </Routes>
      </Router>
    </CurrentUserContext.Provider>
  );
};
// export { CurrentUserContext };
