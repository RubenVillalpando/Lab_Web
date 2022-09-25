import { useState, useEffect } from 'react';
export const useFetch = (url) => {
 //Inicializamos el estado de la información.
 const [state, setState] = useState({
 info: null,
 loading: true,
 error: null
 });
 //Utilizamos un useEffect para indicar que se actualice el estado cada vez que la url cambie.
 useEffect(() => {
 //Invocamos la URL con 'fetch'. Esta función devuelve un Promise por lo que podemos utilizar la
 // función 'then'.
 fetch(url)
 .then((respuesta) => {
 return respuesta.json()
 })
 .then((info) => {
 setState({
 loading: false,
 error: null,
 info
 });
 });
 //Reiniciamos el estado.
 return () => {
 setState({
 loading: true,
 error: null,
 info: null
 });
 }
 }, [url]);
 return state;
}