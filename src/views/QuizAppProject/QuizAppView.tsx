import { useEffect } from 'react'
import './QuizAppView.css'
import 'animate.css'
import video from '../../assets/quiz-app.mp4'
import screenshot from '../../assets/app-screenshot.jpg'
import BackButton from '../../components/BackButton/BackButton'
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo'

const QuizAppView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='QuizAppView container animate__animated animate__fadeInLeft'>
      <ProjectInfo title='QUIZ APP' text='Hejhejhej' code={true} design={true} link='https://github.com/annamalinelisabet/quiz-app' />
      <video src={video} width='220' height='480' poster={screenshot} controls>Your browser can't play the video</video>
      <BackButton />
    </div>
  )
}

export default QuizAppView