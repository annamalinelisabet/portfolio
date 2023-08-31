import './NotFound.css'

const NotFound = () => {
  return (
    <div className='NotFound container'>
        <div>
            <h1>404</h1>
            <h3>Oooops...</h3>
            <p>Something didn't go according to plan</p>
        </div>
        <button className='btn btn-404'>GO HOME</button>
    </div>
  )
}

export default NotFound