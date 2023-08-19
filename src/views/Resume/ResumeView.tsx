import { useEffect, useState } from 'react'
import './ResumeView.css'
import 'animate.css'
import { Link } from 'react-router-dom'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import illustration from '../../assets/illustration-home.jpg'
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
    <div className='ResumeView container'>
      <TopSection header='work & education' src={illustration} alt='Illustration of me infront of a computer' text='Below you will find my past experiences on this developer journey. Perhaps your team will be the next exciting chapter?'/>
      <div className='wrapper animate__animated animate__fadeInUp animate__slow'>
        <div className='box'>
          <div>
            <p className='subtitle'>FRONTEND DEVELOPER &nbsp; | &nbsp; 2021 - 2023</p>
            <a href='https://ecutbildning.se/utbildningar/frontendutvecklare/' className='title' target='_blank' rel='noopener noreferrer'><h4>EC UTBILDNING</h4><HiMiniArrowUpRight /></a>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repudiandae corrupti officiis maiores molestiae, beatae quia, nihil nostrum neque in cum cupiditate dolor nam aperiam reprehenderit nisi? Quos consectetur voluptas odit quidem! Eaque obcaecati accusantium necessitatibus similique mollitia est hic asperiores odit, exercitationem facilis. Deleniti ab suscipit eaque numquam quam?.</p>
          </div>
          <div className='badges'>
            { school.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
        <div className='box'>
          <div>
            <p className='subtitle'>SOFTWARE ENGINEER INTERN &nbsp; | &nbsp; nov 2022 - apr 2023</p>
            <a href='https://www.chef.gastrogate.com' className='title' target='_blank' rel='noopener noreferrer'><h4>GASTROGATE</h4><HiMiniArrowUpRight /></a>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium assumenda pariatur magnam, nulla minima adipisci iure. Qui corrupti minima tempora earum aliquid nostrum libero.</p>
          </div>
          <div className='badges'>
            { gastrogate.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
      </div>
      <p className='end'>If you're curious about what else I've been up to, feel free to <Link to='/contact' className='link'>contact me</Link>. I'd be glad to share my complete CV with you. As a teaser, I can reveal that it covers a variety of things such as dance, tourism and logistics.</p>
    </div>
  )
}

export default ResumeView