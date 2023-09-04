import { useEffect, useState } from 'react'
import './ResumeView.css'
import 'animate.css'
import { Link } from 'react-router-dom'
import { MdOpenInNew } from 'react-icons/md'
import illustration from '../../assets/illustration-laptop.jpg'
import technologies from '../../data/technologies.json'
import TechBadge from '../../components/TechBadge/TechBadge'
import TopSection from '../../components/TopSection/TopSection'

const ResumeView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [school, setSchool] = useState([] as { name: string; ec: boolean; gastrogate: boolean; }[])
  const [gastrogate, setGastrogate] = useState([] as { name: string; ec: boolean; gastrogate: boolean; }[])

useEffect(() => {
  setSchool(technologies.filter(tech => tech.ec === true))
  setGastrogate(technologies.filter(tech => tech.gastrogate === true))
}, [])

  return (
    <div className='ResumeView container animate__animated animate__fadeIn animate__slower'>
      <TopSection header='work & education' src={illustration} alt='Illustration of me infront of a computer' text={`Here you'll find my past experiences on this developer journey. Perhaps your team will be the next exciting chapter?`}/>
      <div className='wrapper flex-column'>
        <div className='box flex-column'>
          <div>
            <p className='text-xs'>FRONTEND DEVELOPER &nbsp; | &nbsp; 2021 - 2023</p>
            <a href='https://ecutbildning.se/utbildningar/frontendutvecklare/' className='title' target='_blank' rel='noopener noreferrer'><h4>EC UTBILDNING</h4><MdOpenInNew /></a>
            <p className='text-xs'>From the very start of my education, it was hands-on coding, working on a wide range of projects, from Vue.js to-do lists to Node.js REST APIs. Engaging in collaborative group projects, such as developing an e-commerce platform, gave me a solid foundation in both front- and backend development, as well as essential skills in agile methodologies and UX/UI design. This education has prepared me thoroughly and ignited my enthusiasm to pursue a career in frontend development.</p>
          </div>
          <div className='badges'>
            { school.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
        <div className='box flex-column'>
          <div>
            <p className='text-xs'>SOFTWARE ENGINEER INTERN &nbsp; | &nbsp; nov 2022 - apr 2023</p>
            <a href='https://www.chef.gastrogate.com' className='title' target='_blank' rel='noopener noreferrer'><h4>GASTROGATE</h4><MdOpenInNew /></a>
            <p className='text-xs'>During my enriching five-month internship, I had the privilege to work closely with a team of experienced developers. This opportunity not only deepened my understanding of frontend development and agile teamwork but also confirmed my strong passion for this field. I seamlessly integrated with the team and was able to contribute successfully to various projects.</p>
          </div>
          <div className='badges'>
            { gastrogate.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
      </div>
      <p className='text-xs'>If you're curious about what else I've been up to, feel free to <Link to='/contact' className='link'>contact me</Link>. I'd be glad to share my complete CV with you. As a teaser, I can reveal that it covers a variety of things such as dance, tourism and logistics.</p>
    </div>
  )
}

export default ResumeView