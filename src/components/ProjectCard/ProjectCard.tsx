import { Link } from 'react-router-dom';
import './ProjectCard.css'
import { BsArrowRight } from 'react-icons/bs'

interface ProjectCardProps {
    title: string;
    code: boolean;
    design: boolean;
    id: number;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, code, design, id }) => {
    return (
      <Link to={'/portfolio/' + id}>
        <div className='ProjectCard flex-align-center'>
          <div className='title-arrow flex-align-center'>
            <BsArrowRight className='arrow'/>
            <h2 className='title'>{title}</h2>
          </div>
          <div className='text-box'>
            { code ? <p className='text-s'>code</p> : null }
            { design ? <p className='text-s'>&nbsp; - &nbsp;design</p> : null }
          </div>
        </div>
      </Link>
    )
  }
  
  export default ProjectCard