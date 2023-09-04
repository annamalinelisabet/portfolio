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
    <div className='PortfolioProject container pb-2 animate__animated animate__fadeInLeft'>
      <ProjectInfo title='Portfolio' text={`Portfolio and more, I would say. This is the very website you're currently browsing. The quirky illustration of me on the homepage? My sister's work of art - I couldn't resist featuring it. So, the design centers around it, aiming for a website that combines playfulness with professionalism. For this project, I decided to incorporate TypeScript into the mix to further strengthen my skills, especially since I've mostly worked with JavaScript.`} code={true} design={true} link='https://github.com/annamalinelisabet/portfolio' />
      <BackButton />
    </div>
  )
}

export default PortfolioProjectView