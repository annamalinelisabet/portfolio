import './BackButton.css'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate()

    return (
        <div className='BackButton arrow-wrapper flex-align-center' onClick={() => navigate(-1)}>
            <BsArrowLeft />
            <p>Back</p>
        </div>
    )
}

export default BackButton