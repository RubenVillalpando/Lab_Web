import { useState } from 'react'; 
 
export const useContador = (initialState = 10) => { 
 
    const [state, setState] = useState(initialState); 
 
    //Creamos una función para cambiar el state, incrementando el valor de initialState. Recibe como parámetro 
    // el factor de incremento. 
    const increment = (factor = 1) => { 
        setState(state + factor); 
    } 
 
    //Creamos una función para cambiar el state, decrementando el valor de initialState. Recibe como parámetro 
    // el factor de decremento. 
    const decrement = (factor = 1) => { 
        setState(state - factor); 
    } 
 
    //Creamos una función para resetear el valor. 
    const reset = () => { 
        setState(initialState); 
    } 
 
    //Regresamos un objeto que va tener el state, increment, decrement, y reset 
    return { 
        state, 
        increment, 
        decrement, 
        reset 
    } 
 
} 