import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { Hooks } from './Hooks'; 
import { Contador } from './hooks/state/Contador';
import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<ContadorConCustomHook />);