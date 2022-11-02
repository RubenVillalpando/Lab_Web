import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Navbar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand p-3" to="/">
        Games App
      </Link>

      <div className="navbar-collapse justify-content-start">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active text-center px-3" : "nav-item nav-link px-2"
            }
            exact="true"
            to="/game-collection"
          >
            Videojuegos
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active text-center px-3" : "nav-item nav-link px-2"
            }
            exact="true"
            to="/game-search"
          >
            Mi colección
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active text-center px-3" : "nav-item nav-link px-2"
            }
            exact="true"
            to="/game-genre"
          >
            Videojuegos por género
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse justify-content-end">
        <ul className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active text-center" : "nav-item nav-link px-5"
            }
            exact="true"
            to="/login"
          >
            Salir
          </NavLink>
          {currentUser ? (
            <h2 className="text-white"></h2>
          ) : (
            <h2 className="text-white">{currentUser}</h2>
          )}
        </ul>
      </div>
    </nav>
  );
};
