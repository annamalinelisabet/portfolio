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
    <div className='QuizAppView container pb-2 animate__animated animate__fadeInLeft'>
      <ProjectInfo title='QUIZ APP' text={`This is my first and so far only attempt at app development. I wanted to test if I could do it, even though it wasn't a part of my education. Thanks to my experience with React Native during my internship, I was able to build this quiz app quite smoothly. It's not very complex, but it's loads of fun and it has made me eager to dive deeper into app development.`} code={true} design={true} link='https://github.com/annamalinelisabet/quiz-app' />
      <video src={video} width='220' height='480' poster={screenshot} controls>Your browser can't play the video</video>
      <p className='text-xs'>A short but sweet clip from the app.</p>
      <BackButton />
    </div>
  )
}

export default QuizAppView