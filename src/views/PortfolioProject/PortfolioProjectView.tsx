import { useEffect } from 'react'
import './PortfolioProjectView.css'

const PortfolioProjectView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioProject container'>
      <h1 className='header'>PORTFOLIO</h1>
    </div>
  )
}

export default PortfolioProjectView