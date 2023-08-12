import { useEffect } from 'react'
import './PortfolioView.css'

const PortfolioView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioView container'>
      <h1>Portfolio</h1>
    </div>
  )
}

export default PortfolioView