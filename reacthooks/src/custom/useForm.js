import { useState } from 'react';
export const useForm = (initialState = {}) => {
 //Creamos el estado inicial con el hook useState.
 const [formValues, setFormValues] = useState(initialState);
 //Funcion que podemos utilizar para resetear los valores del formulario.
 const reset = () => {
 setFormValues(initialState);
 }
 //Esta función se va invocar cada vez que exista un cambio en alguno de los input text del formulario.
 const handleInputChange = (e) => {
 //console.log(e.target.name);
 //console.log(e.target.value);
 //Actualizamos el estado del formulario.
 setFormValues({
 ...formValues,
 [e.target.name]: e.target.value
 })
 }
 //El custom hook va regresar formValues, la función handleInputChange, y la función reset
 return [formValues, handleInputChange, reset];

}