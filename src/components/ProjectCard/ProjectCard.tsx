import { Link } from 'react-router-dom';
import './ProjectCard.css'

interface ProjectCardProps {
    title: string;
    code: boolean;
    design: boolean;
    id: number;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, code, design, id }) => {
    return (
      <Link to={'/portfolio/' + id}>
        <div className='ProjectCard'>
          <h2 className='title'>{title}</h2>
          <div className='text-box'>
            { code ? <p className='text'>code</p> : null }
            { design ? <p className='text'>&nbsp; - &nbsp;design</p> : null }
          </div>
        </div>
      </Link>
    )
  }
  
  export default ProjectCard