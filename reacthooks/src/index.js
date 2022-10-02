import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { TodoApp } from './hooks/reducer/TodoApp';
import { Hooks } from './Hooks'; 
import { Formulario } from './hooks/effect/Formulario';
import { Mensaje } from './hooks/effect/Mensaje';
import { Contador } from './hooks/state/Contador';
import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
import { MultipleCustomHooks } from './hooks/MultipleCustomHooks';
import { FocusScreen } from './hooks/ref/FocusScreen';
import { Memoriza } from './hooks/memo/Memoriza';
import { HookUseMemo } from './hooks/memo/HookUseMemo';
import { HookCallback } from './hooks/memo/HookCallBack';
 
const container = document.getElementById('root'); 
 
const root = createRoot(container); 
 
root.render(<TodoApp />);

import('./hooks/reducer/intro-reducer');