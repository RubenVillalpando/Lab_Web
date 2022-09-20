import { useState } from 'react'; 
 
export const useContador = (initialState = 10) => { 
 
    const [state, setState] = useState(initialState); 
    
    const handleInputChange = () => {

    }
 
    //Regresamos un objeto que va tener el state, increment, decrement, y reset 
    return [
        state,
        handleInputChange
    ]
 
} 