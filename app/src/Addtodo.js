import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function AddTodo({setTasks, tasks}) {

  const [title, setTitle] = useState('');
  
  return (
    <div className= "add">
      <input
        placeholder="Add task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button onClick={() => {
        setTitle(''); 
        setTasks([ 
          ...tasks, 
          { 
          id: Date.now(), 
          text: title,
        } 
        ])
        localStorage.setItem((Date.now()), (title));

        }}>Add</button>
  
    </div>
  )
}

export default AddTodo