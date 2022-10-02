import React from 'react';
//Este componente recibe como parámetro el todo a mostrar, su índice, y las referencias a las funciones handle.
export const TodoListItem = ({ todo, index, handleDeleteTodo, handleCompleteTodo }) => {
 return (
 <li
 key={todo.id}
 className="list-group-item"
 >
 <p
 className={`${todo.done && 'complete'}`}
 onClick={() => handleCompleteTodo(todo.id)}
 >
 {index + 1}. {todo.desc}
 </p>
 <button
 className="btn-danger"
 onClick={() => handleDeleteTodo(todo.id)}
 >
 Borrar
 </button>
 </li>
 )
}