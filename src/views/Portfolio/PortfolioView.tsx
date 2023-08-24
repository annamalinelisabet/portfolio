import { useEffect, useState } from 'react'
import './PortfolioView.css'
import 'animate.css'
import TopSection from '../../components/TopSection/TopSection'
import illustration from '../../assets/illustration-home.jpg'
import data from '../../data/projects.json'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
// import video from '../../assets/quiz-app.mp4'
// import screenshot from '../../assets/app-screenshot.jpg'

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
      <TopSection header='hobby projects' src={illustration} alt='Illustration of me' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto ab exercitationem illo unde eos itaque autem? Aut deleniti quod voluptates eum vitae? Incidunt illum ex dignissimos voluptatum, laboriosam delectus.'/>
      {/* <video src={video} width='300' height='500' poster={screenshot} autoPlay>Your browser can't play the video</video> */}
      <div className='wrapper animate__animated animate__fadeInUp animate__slow'>
        { projects.map(project => <ProjectCard key={project.id} title={project.title} code={project.code} design={project.design} id={project.id}/> ) }
      </div>
    </div>
  )
}

export default PortfolioView