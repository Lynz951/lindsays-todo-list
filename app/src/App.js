
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Heading from './Heading.js';
import AddTodo from './Addtodo.js';
import Tasklist from './Tasklist.js';
import Btngroup from './Btngroup.js';

function App (props) {

const [tasks, setTasks] = useState([]);

    return (
        <>
        <Heading />
        <AddTodo setTasks={setTasks} tasks={tasks} />
        <Tasklist tasks={tasks} setTasks={setTasks} />
        <Btngroup />
        </>
    )
}
export default App