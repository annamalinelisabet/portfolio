import { useEffect } from 'react'
import './QuizAppView.css'
import video from '../../assets/quiz-app.mp4'
import screenshot from '../../assets/app-screenshot.jpg'

const QuizAppView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    //! Det här kommer kunna användas på alla projektsidor, gör komponent!!
    <div className='QuizAppView container'>
      <h1 className='header'>QUIZ APP</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora, provident deleniti magni eveniet ad natus sapiente, quas vel, totam amet exercitationem mollitia deserunt saepe.</p>
      <p className='text2'>CODE&nbsp; - &nbsp;DESIGN</p>
      <a href='https://github.com/annamalinelisabet/quiz-app' target='_blank' rel='noopener noreferrer' aria-label='Link to GitHub project'><button className='btn btn-code'>VIEW CODE</button></a>
      <video src={video} width='220' height='480' poster={screenshot} autoPlay controls>Your browser can't play the video</video>
    </div>
  )
}

export default QuizAppView