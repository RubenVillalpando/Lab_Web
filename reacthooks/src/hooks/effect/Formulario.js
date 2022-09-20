import React, { useEffect, useState } from 'react'; 
import { useForm } from '../../custom/useForm';
import { Mensaje } from './Mensaje';
 
export const Formulario = () => { 
 
    //Creamos el estado del formulario, cuyo estado inicial va ser un objeto con email y nombre vacíos. 
    const [formState, setFormState] = useForm({ 
        nombre: '', 
        email: '' 
    }); 
 
    //Desestructuramos el estado del formulario 
    const { nombre, email } = formState; 
 
 
    //Este useEffect se va disparar cuando se cree el componente por primera vez, por eso enviamos el arreglo de 
    // dependencias vacío. 
    useEffect(() => { 
        console.log('Creación del componente por primera vez: useEffect ejecutado...'); 
    }, []) 
 
    //Este useEffect se va disparar cada vez que se exista un cambio en formState. Por eso enviamos la variable 
    // formState en el arreglo de dependencias. 
    useEffect(() => { 
        console.log('formState cambió...'); 
    }, [formState]) 
 
    //Este useEffect se va disparar cada vez que se exista un cambio en el email. Por eso enviamos la variable 
    // email en el arreglo de dependencias. 
    useEffect(() => { 
        console.log('email cambió...'); 
    }, [email]) 
 
    return ( 
        <> 
            <h1>useEffect</h1> 
            <hr /> 
 
            {/* 
                Creamos el formulario 
            */} 
            <div className="form-group"> 
                <input 
                    type="text" 
                    name="nombre" 
                    className="form-control" 
                    placeholder="Nombre" 
                    autoComplete="off" 
                    value={nombre} 
                    onChange={setFormState} 
                /> 
            </div> 
            <div className="form-group"> 
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Correo Electrónico" 
                    autoComplete="off" 
                    value={email} 
                    onChange={setFormState} 
                /> 
            </div> 
             {/* 
                Esta sintaxis es un condicional, de tal forma que si se la condicion 'nombre === "Jorge"' es  
                true entonces se evalua '<Mensaje />', y si 'nombre' es false ya no se evalúa '<Mensaje />' 
            */} 
            {(nombre === 'Jorge') && <Mensaje />} 
        </> 
    ) 
} 
 