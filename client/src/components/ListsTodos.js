import React, { Fragment, useState, useEffect } from "react";

//components
import EditTodo from "./EditTodo";

const ListsTodos = () => {
  //detete todo
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:8000/todos/${id}`, {
        method: "DELETE",
      });
      // console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");
      const jsonData = await response.json();
      // console.log(jsonData);
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  //   console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className='table mt-5'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th className='text-end' scope='col'>
              Edit
            </th>
            <th className='text-end' scope='col'>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td className='text-end'>
                  <EditTodo todo={todo} />
                </td>
                <td className='text-end'>
                  <button
                    onClick={() => deleteTodo(todo.todo_id)}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListsTodos;
