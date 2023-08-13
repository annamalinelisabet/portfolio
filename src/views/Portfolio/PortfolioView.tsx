import { useEffect } from 'react'
import './PortfolioView.css'
// import video from '../../assets/quiz-app.mp4'
// import screenshot from '../../assets/app-screenshot.jpg'

const PortfolioView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioView container'>
      {/* <video src={video} width='300' height='500' poster={screenshot} autoPlay>Your browser can't play the video</video> */}
    </div>
  )
}

export default PortfolioView