import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../customHooks/CurrentUserContext";

export const Navbar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Game Services
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            exact="true"
            to="/game-collection"
          >
            Game Collection
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            exact="true"
            to="/game-search"
          >
            Game Search
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
            }
            exact="true"
            to="/game-genre"
          >
            Games by Genre
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "nav-item nav-link"
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
