//Generamos el estado inicial, el cual va ser una lista de TODOs con 1 elemento.
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];
//Creamos la primer función reducer, la cual va recibir como parámetros el estado, que recibe como valor el
//estado inicial en caso de no haber proporcionado un valor para este parámetro en la invocación del reducer,
//y la acción que se va ejecutar sobre ese estado. Esta función va devolver un nuevo estado.
const todoReducer = (state = initialState, action) => {
  //Ejecutamos el action 'agregarTodoAction'.
  if (action?.type === "agregar") {
    //Para agregar un nuevo elemento al arreglo vamos a utilizar el operador spread '...'.
    return [...state, action.payload];
  }
  return state;
};
//Ejecutamos el reducer
let todos = todoReducer();
//Agregamos un nuevo elemento a la lista utilizando el reducer:
//1. Creamos un elemento que va modificar el estado actual.
const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};
//2. Creamos un 'action'. El estandar es que cada action tenga un type que describe la acción a ejecutar, un payload
// que es el contenido sobre el cual se va ejecutar la acción
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};
//3. Utilizamos el reducer para actualizar el estado utilizando el action. Recibe el estado actual, que en este
// caso es 'todos' y el action a ejecutar, que en este caso es 'agregarTodoAction'.
todos = todoReducer(todos, agregarTodoAction);
//Imprimimos en consola los TODOs
console.log(todos);
