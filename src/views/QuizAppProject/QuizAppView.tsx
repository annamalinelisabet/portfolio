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
      <ProjectInfo title='QUIZ APP' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quis. Sint sunt dignissimos ab minima, molestiae deserunt blanditiis autem. Numquam voluptatem consequatur illum pariatur, inventore dolore nemo sit itaque porro quam deleniti recusandae ut voluptas quis corporis similique nobis voluptatibus?' code={true} design={true} link='https://github.com/annamalinelisabet/quiz-app' />
      <video src={video} width='220' height='480' poster={screenshot} controls>Your browser can't play the video</video>
      <BackButton />
    </div>
  )
}

export default QuizAppView