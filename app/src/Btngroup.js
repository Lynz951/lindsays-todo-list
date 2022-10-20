
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
  
function Btngroup () {
    return (
    <div className='buttons'>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        
            <input type="radio" className="btn-check" name="btnradio" id="completed" autoComplete="off" defaultChecked />
            <label className="btn btn-outline-primary" for="completed">Completed</label>

            <input type="radio" className="btn-check" name="btnradio" id="notdoneyet" autoComplete="off" />
            <label className="btn btn-outline-primary" for="notdoneyet">Not done yet</label>

            <input type="radio" className="btn-check" name="btnradio" id="deleted" autoComplete="off" />
            <label className="btn btn-outline-primary" for="deleted">Deleted</label>

            <input type="radio" className="btn-check" name="btnradio" id="all" autoComplete="off" />
            <label className="btn btn-outline-primary" for="all">All</label>
        </div>
    </div>
    )
}
export default Btngroup