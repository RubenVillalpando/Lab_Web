import React, { useState } from 'react'; 
export const Contador = () => { 
 
    //useState puede recibir como parámetro un dato de tipo primitivo, como un entero o un string, o puede 
    // recibir un objeto.  
    //useState nos devuelve 2 valores: una referencia a su parámetro, y una función que actúa sobre su 
    // parámetro.  
    const [state, setState] = useState({ 
        counter1: 10, 
        counter2: 20, 
        counter3: 30, 
        counter4: 40 
    }); 
 
    const { counter1, counter2 } = state; 
 
    return ( 
        <> 
            <h1>Counter1 {counter1}</h1> 
            <h1>Counter2 {counter2}</h1> 
            <hr /> 
 
            <button 
                className="btn btn-primary" 
                onClick={() => { 
                    /* 
  Mandamos llamar la funcion setCounter para cambiar el estado del objeto.  
     */ 
                    setState({ 
                        ...state, 
                        counter1: counter1 + 1 
                    }) 
                }}> 
                +1 
            </button> 
        </> 
    ) 
} 