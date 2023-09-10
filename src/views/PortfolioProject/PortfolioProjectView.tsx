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
      <ProjectInfo title='Portfolio' text={`Portfolio and more, I would say. This is the very website you're currently browsing. The quirky illustration of me on the homepage? My sister's work of art - I couldn't resist featuring it, so the design evolved from there. And while it may seem a bit self-centered to have her make more illustrations of me, at least I believe I've managed to create a website that blends playfulness with professionalism, which was the goal. I wanted to try something new for this project, so I decided to incorporate Vite and TypeScript into the mix to further strengthen my skills.`} code={true} design={true} link='https://github.com/annamalinelisabet/portfolio' />
      <BackButton />
    </div>
  )
}

export default PortfolioProjectView