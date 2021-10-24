import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className='text-center mt-5'>Pern Todo List</h1>

      <form onSubmit={onSubmitForm} className='mt-5'>
        <div className='input-group mb-3'>
          <input
            type='text'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className='form-control'
            placeholder='Enter todo'
            aria-describedby='button-addon'
          />
          <button className='btn btn-success' id='button-addon'>
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputTodo;
