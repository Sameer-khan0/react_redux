import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/todoslices";
import "./css/addtodo.css";

function AddTodos() {
  const [values, setValues] = useState({ id: "", text: "" });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addtodo(values));
    alert("Todo is added")
    document.getElementById('id').value=""
    document.getElementById('text').value=""
  };

  return (
    <div id="addtodo">
      <input type="text" id="id" placeholder="id" name="id" onChange={handleChange} />
      <input
        type="text"
        placeholder="text"
        name="text"
        id="text"
        onChange={handleChange}
      />
      <button
        type="button"
        disabled={values.id.length <= 1 || values.text.length <= 5}
        onClick={handleSubmit}
        className="btn btn-primary"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodos;
