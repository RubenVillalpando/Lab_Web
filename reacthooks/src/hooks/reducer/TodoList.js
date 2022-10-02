import React from 'react';
import { TodoListItem } from './TodoListItem';
//Componente para la lista de Todos. Recibe como argumentos el todoState y los métodos handleDeleteTodo
// y handleCompleteTodo
export const TodoList = ({ todoState, handleDeleteTodo, handleCompleteTodo }) => {
 return (
 <ul className="list-group list-group-flush">
 {
 todoState.map((todo, i) => (
 /*
 Se manda llamar el componente TodoListItem y se pasan sus parámetros. Para los que son
 funciones lo que estamos haciendo es pasar la referencia de dichas funciones.
 */
 <TodoListItem
 todo={todo}
 index={i}
 handleDeleteTodo={handleDeleteTodo}
 handleCompleteTodo={handleCompleteTodo}
 />
 ))
 }
 </ul>
 )
}