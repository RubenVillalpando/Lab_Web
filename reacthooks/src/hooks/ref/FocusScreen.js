import React, { useRef } from 'react';
export const FocusScreen = () => {
 //Creamos una referencia con useRef.
 const inputRef = useRef();
 const handleClick = () => {
    //Al hacer clic al botón, va poner focus al primer elemento ligado a la referencia creada con useRef.
 inputRef.current.focus();
}
return (
<>
    <h1>Focus Screen</h1>
    <hr />
    {/*
    Creamos un input que va tener un binding a la referencia creada con el hook useRef.
    */}
    <input ref={inputRef} className="formControl" placeholder="Nombre"/>
    <button className="btn btn-primary" onClick={handleClick}>
        Focus
    </button>
</>
)
}