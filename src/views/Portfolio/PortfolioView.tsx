import { useEffect } from 'react'
import './PortfolioView.css'

const PortfolioView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioView container'>
    </div>
  )
}

export default PortfolioView