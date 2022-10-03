import React from "react";
import { createRoot } from "react-dom/client";
import { GameCollectionApp } from "./componentes/GameCollectionApp";

import { VideojuegosApp } from "./VideoJuegosApp";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<GameCollectionApp />);
