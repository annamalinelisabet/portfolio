import { useEffect } from 'react'
import './PortfolioProjectView.css'
import 'animate.css'

const PortfolioProjectView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioProject container animate__animated animate__fadeInLeft'>
      <h1 className='header'>PORTFOLIO</h1>
    </div>
  )
}

export default PortfolioProjectView