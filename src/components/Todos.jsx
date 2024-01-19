import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removetodo} from '../Redux/todoslices' 
import './css/todo.css'



function Todos() {
  const [todos, setTodos] = useState([]);
  const dispatch=useDispatch()
  const todosFromRedux = useSelector((state) => state.todo);

  useEffect(() => {
    setTodos(todosFromRedux);
    console.log(todosFromRedux)
  }, [todosFromRedux]);

  return (
    <div id='todo'>
      {todos.length >= 1 ? (
        todos.map((e, index) => (
          <>
          <div key={index}>
            <div>
            <li>Id: {e.id}</li>
            <p><b>Content</b>: {e.text}</p>
            <li>Date: {e.date}</li>
            </div>
          <button onClick={()=>{dispatch(removetodo(e.id))}}>Delete</button>
          </div>
          </>
        ))
      ) : (
        <h2>No Todo found</h2>
      )}
    </div>
  );
}

export default Todos;
