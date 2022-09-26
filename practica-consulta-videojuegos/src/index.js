import React from "react";
import { createRoot } from "react-dom/client";

import { VideojuegosApp } from "./VideoJuegosApp";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<VideojuegosApp />);
