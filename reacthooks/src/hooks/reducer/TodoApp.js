import React, { useEffect, useReducer } from 'react';
import './todoStyles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
//Creamos la función init que va utilizar el hook useReducer para inicializar su estado.
const init = () => {
 //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
 // null entonces regresamos un arreglo vacío [].
 return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {
    //Utilizamos el useReducer.
    //En la desestructuracion, estamos obteniendo el estado del todo con todoState, y el dispatch el cual se
    // va utilizar para poder mandar una acción al reducer y que finalmente va redibujar el componente.
    const [todoState, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
    //Debido a que en localStorage sólo se pueden guardar strings y no objetos, si queremos guarar un
    // JSON debemos convertirlo a string con JSON.stringify
    localStorage.setItem('todos', JSON.stringify(todoState));
    }, [todoState]);
    //Mostramos en la consola del navegador el estado del todo.
    console.log(todoState);
    //Este método nos va servir para agregar un nuevo TODO a la lista
    const handleNewTodo = (nuevoTodo) => {
    //Creamos el action 'add' que se va enviar al reducer
    const action = {
    type: 'add',
    payload: nuevoTodo
    }
    //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
    // enviar la acción al reducer.
    dispatch(action);
    }
    //Dispara el evento 'delete' hacia el reducer para eliminar un elemento de la lista.
    const handleDeleteTodo = (todoId) => {
    console.log(todoId);
    //Creamos el action 'delete' que se va enviar al reducer. En el payload es suficiente con que enviemos
    // el ID del todo a elminiar ya que en el reducer se utiliza en el filter para descartarlo de la lista.
    const action = {
    type: 'delete',
    payload: todoId
    }
    //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
    // enviar la acción al reducer.
    dispatch(action);
    }
    //Dispara el evento 'complete' hacia el reducer para marcar como completado un elemento de la lista
    const handleCompleteTodo = (todoId) => {
    //Creamos el action 'complete' que se va enviar al reducer. En el payload es suficiente con que enviemos
    // el ID del todo a completar.
    const action = {
    type: 'complete',
    payload: todoId
    }
    //Utilizamos la variable dispatch que obtuvimos en la desestructuración de useReducer para
    // enviar la acción al reducer.
    dispatch(action);
    }
    return (
    <>
    <h1>Todo App ({todoState.length})</h1>
    <hr />
    {
        //Creamos la lista de TODOs
 }
 <div className="row">
 <div className="col-7">
 <TodoList
 todoState={todoState}
 handleDeleteTodo={handleDeleteTodo}
 handleCompleteTodo={handleCompleteTodo}
 />
 </div>
 <div className="col-5">
 <TodoAdd
 handleNewTodo={handleNewTodo}
 />
 </div>
 </div>
 </>
 );
}