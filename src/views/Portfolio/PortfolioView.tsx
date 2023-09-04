import { useEffect, useState } from 'react'
import './PortfolioView.css'
import 'animate.css'
import TopSection from '../../components/TopSection/TopSection'
import illustration from '../../assets/illustration-pen.jpg'
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
    <div className='PortfolioView container pb-2 animate__animated animate__fadeIn animate__slower'>
      <TopSection header='hobby projects' src={illustration} alt='Illustration of me' text={`My coding philosophy revolves around clean, well-structured code that seamlessly combines design and function. While React is my go-to playground, I'm not bound by any framework - I'm always excited to explore new technologies! This portfolio is a showcase of some of my projects. Enjoy!`}/>
      <div className='wrapper'>
        { projects.map(project => <ProjectCard key={project.id} title={project.title} code={project.code} design={project.design} id={project.id}/> ) }
      </div>
      <p className='text-s'><span className='upcoming'>Upcoming project</span>&nbsp; - &nbsp;A website for my sister's arts and crafts. She's the one who created the cute illustrations you see on this site.</p>
    </div>
  )
}

export default PortfolioView