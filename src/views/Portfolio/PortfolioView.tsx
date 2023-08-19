import { useEffect } from 'react'
import './PortfolioView.css'
import TopSection from '../../components/TopSection/TopSection'
import illustration from '../../assets/illustration-home.jpg'
// import video from '../../assets/quiz-app.mp4'
// import screenshot from '../../assets/app-screenshot.jpg'

const PortfolioView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioView container'>
      <TopSection header='hobby projects' src={illustration} alt='Illustration of me' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto ab exercitationem illo unde eos itaque autem? Aut deleniti quod voluptates eum vitae? Incidunt illum ex dignissimos voluptatum, laboriosam delectus.'/>
      {/* <video src={video} width='300' height='500' poster={screenshot} autoPlay>Your browser can't play the video</video> */}
    </div>
  )
}

export default PortfolioView