import React from 'react';
import { useForm } from '../../custom/useForm';
export const TodoAdd = ({ handleNewTodo }) => {
 const [{ descripcion }, handleInputChange, reset] = useForm({
 descripcion: ''
 });
 const handleAddTodo = (e) => {
 //Evitamos el refresh del navegador con la función preventDefault()
 e.preventDefault();
 //Validamos que la descripción tenga información para poderlo agregar a la lista.
 if (descripcion.trim().length === 0) {
    return;
    }
    //Creamos el nuevo TODO
    const nuevoTodo = {
    id: new Date().getTime(),
    desc: descripcion, //Esta descripcion la obtenemos de la variable 'descripcion' que obtuvimos utilizando el custom hook useForm
    done: false
    }
    //Creamos el nuevo todo.
    handleNewTodo(nuevoTodo);
    //Reseteamos los valores del formulario.
    reset();
    }
    return (
    <>
    <h4>Agregar TODO</h4>
    < hr />
    <form onSubmit={handleAddTodo}>
    {
    //En este input text estamos igualando value a la variable 'descripcion' que
    // obtuvimos al utilizar el custom hook useForm
    }
    <input
    type="text"
    name="descripcion"
    className="form-control"
    placeholder="Indica el TODO..."
    autoComplete="off"
    value={descripcion}
    onChange={handleInputChange}
    />
    <button
    type="submit"
    className="btn btn-outline-primary mt-1 btn-block"
    >
    Agregar
    </button>
    </form>
    </>
    )
   }