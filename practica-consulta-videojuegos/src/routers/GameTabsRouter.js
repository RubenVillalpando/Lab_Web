import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GameCollectionApp } from "../componentes/GameCollectionApp";
import { GameSearch } from "../componentes/GameSearch";
import { Login } from "../componentes/Login";
import { Navbar } from "../componentes/Navbar";
import { VideojuegosApp } from "../componentes/VideoJuegosApp";
import { Logs } from "../componentes/Logs";

export const GameTabsRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/game-collection" element={<GameCollectionApp />} />
        <Route exact path="/game-genre" element={<VideojuegosApp />} />
        <Route exact path="/game-search" element={<GameSearch />} />
        <Route exact path="/logs" element={<Logs />} />
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/game-collection" replace />} />
      </Routes>
    </>
  );
};
