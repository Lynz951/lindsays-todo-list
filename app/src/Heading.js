import './style.css';
import photo from './todo.png';

const divStyle = {
    color: 'blue',
    backgroundImage: {photo},
  };

function Heading() {
  return (
    <div container className='cont'>
        <div row style={divStyle}className='row'>
          <div col-6 className="section1'">
            <img className="cookies"
            src={photo} 
            alt= {''} 
            />
                <div className= "section2">
                <h1>Lindsay's Two Dews</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Heading