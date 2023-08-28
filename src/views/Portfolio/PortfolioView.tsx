import { useEffect, useState } from 'react'
import './PortfolioView.css'
import 'animate.css'
import TopSection from '../../components/TopSection/TopSection'
import illustration from '../../assets/illustration-home.jpg'
import data from '../../data/projects.json'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const PortfolioView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [projects, setProjects] = useState([] as { title: string; code: boolean; design: boolean; id: number; }[])

  useEffect(() => {
    setProjects(data)
  })

  return (
    <div className='PortfolioView container'>
      <TopSection header='hobby projects' src={illustration} alt='Illustration of me' text={`Hello hi`}/>
      <div className='wrapper animate__animated animate__fadeInUp animate__slow'>
        { projects.map(project => <ProjectCard key={project.id} title={project.title} code={project.code} design={project.design} id={project.id}/> ) }
      </div>
    </div>
  )
}

export default PortfolioView