import { useEffect } from 'react'
import './PortfolioProjectView.css'
import 'animate.css'
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo'
import BackButton from '../../components/BackButton/BackButton'

const PortfolioProjectView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='PortfolioProject container animate__animated animate__fadeInLeft'>
      <ProjectInfo title='Portfolio' text='hallååå' code={true} design={true} link='https://github.com/annamalinelisabet/portfolio' />
      <BackButton />
    </div>
  )
}

export default PortfolioProjectView