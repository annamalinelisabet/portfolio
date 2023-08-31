import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='NotFound container'>
        <div>
            <h1>404</h1>
            <h3>Oooops...</h3>
            <p>Something didn't go according to plan</p>
        </div>
        <Link to='/'><button className='btn btn-404'>GO HOME</button></Link>
    </div>
  )
}

export default NotFound