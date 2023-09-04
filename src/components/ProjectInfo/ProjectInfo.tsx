import './ProjectInfo.css'
import { MdOpenInNew } from 'react-icons/md'

interface ProjectInfoProps {
    title: string;
    text: string;
    code: boolean;
    design: boolean;
    link: string;
  }

const ProjectInfo: React.FC<ProjectInfoProps> = ({ title, text, code, design, link }) => {
  return (
    <div className='ProjectInfo'>
        <h1 className='header'>{title}</h1>
        <p className='text'>{text}</p>
        <p className='category pb-2'>{code && 'CODE'}&nbsp; - &nbsp;{design && 'DESIGN'}</p>
        <a href={link} target='_blank' rel='noopener noreferrer' aria-label='Link to GitHub project'><button className='btn btn-code'>VIEW CODE <MdOpenInNew /></button></a>
    </div>
  )
}

export default ProjectInfo