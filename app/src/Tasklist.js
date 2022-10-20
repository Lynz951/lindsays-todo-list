
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function Tasklist ({ setTasks, tasks }) {

    function clickDelete (id) {
            setTasks(tasks.filter(a =>
                a.id !== id))
    }

    return ( 
        <div row className='list'>
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                        />
                        {item.text}
                    <button onClick={() => {clickDelete(item.id)}}>Delete</button>
                </li>
                ))}   
            </ul>

            <div className='left'>
            <br />
            <h5>You have {tasks.length} tasks left!</h5>
            </div>
        </div>
    )
}

export default Tasklist