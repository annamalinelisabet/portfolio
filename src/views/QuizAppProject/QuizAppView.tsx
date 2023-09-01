import { useEffect } from 'react'
import './QuizAppView.css'
import 'animate.css'
import video from '../../assets/quiz-app.mp4'
import screenshot from '../../assets/app-screenshot.jpg'
import { BsArrowLeft } from 'react-icons/bs'
import { MdOpenInNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const QuizAppView = () => {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    //! Det här kommer kunna användas på alla projektsidor, gör komponent!!
    <div className='QuizAppView container animate__animated animate__fadeInLeft'>
      <h1 className='header'>QUIZ APP</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora, provident deleniti magni eveniet ad natus sapiente, quas vel, totam amet exercitationem mollitia deserunt saepe.</p>
      <p className='text2'>CODE&nbsp; - &nbsp;DESIGN</p>
      <a href='https://github.com/annamalinelisabet/quiz-app' target='_blank' rel='noopener noreferrer' aria-label='Link to GitHub project'><button className='btn btn-code'>VIEW CODE <MdOpenInNew /></button></a>
      <video src={video} width='220' height='480' poster={screenshot} controls>Your browser can't play the video</video>
      <div className='arrow-wrapper' onClick={() => navigate(-1)}>
        <BsArrowLeft />
        <p>Back</p>
      </div>
    </div>
  )
}

export default QuizAppView