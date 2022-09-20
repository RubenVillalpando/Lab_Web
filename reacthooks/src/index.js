import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { Hooks } from './Hooks'; 
import { Formulario } from './hooks/effect/Formulario';
import { Mensaje } from './hooks/effect/Mensaje';
import { Contador } from './hooks/state/Contador';
import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<Formulario />);