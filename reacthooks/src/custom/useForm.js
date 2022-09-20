import { useState } from 'react'; 
 
export const useForm = (initialState = {}) => { 
 
    const [state, setState] = useState(initialState); 

    const handleInputChange = (e) => { 
        //Actualizamos el estado del formulario. 
        setState({ 
            ...state,           
            [e.target.name]: e.target.value
        }) 
    } 
 
    //Regresamos un objeto que va tener el state, increment, decrement, y reset 
    return [
        state,
        handleInputChange
    ] 
 
} 