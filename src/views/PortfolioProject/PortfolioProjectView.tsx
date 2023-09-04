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
      <ProjectInfo title='Portfolio' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui nostrum sunt. Quidem ipsa vel odit, corrupti sit aliquid nam totam harum doloribus suscipit asperiores ad animi rerum quisquam saepe libero, minima similique pariatur labore cumque sequi alias, delectus earum sunt. Alias consectetur error beatae optio nihil molestias quasi numquam.' code={true} design={true} link='https://github.com/annamalinelisabet/portfolio' />
      <BackButton />
    </div>
  )
}

export default PortfolioProjectView