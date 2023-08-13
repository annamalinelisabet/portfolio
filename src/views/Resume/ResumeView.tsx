import { useEffect, useState } from 'react'
import './ResumeView.css'
import { Link } from 'react-router-dom'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import illustration from '../../assets/illustration-home.jpg'
import technologies from '../../data/technologies.json'
import TechBadge from '../../components/TechBadge/TechBadge'

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
      <div className='top-wrapper'>
        <h1 className='header'>WORK & EDUCATION</h1>
        <div className='illustration-box'>
          <img src={illustration} alt="" />
        </div>
        <p className='text'>While my experience as a <span className='span-text'>frontend developer</span> might not appear extensive on paper, I can confidently assert that my skills are well-founded.  Below, you'll find my past experiences on this developer journey. Perhaps your team will be the next exciting chapter?</p>
      </div>
      <div className='wrapper'>
        <div className='box'>
          <div>
            <p className='subtitle'>FRONTEND DEVELOPER</p>
            <a href='https://ecutbildning.se/utbildningar/frontendutvecklare/' className='title' target='_blank' rel='noopener noreferrer'><h4>EC UTBILDNING</h4><HiMiniArrowUpRight /></a>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repudiandae corrupti officiis maiores molestiae, beatae quia, nihil nostrum neque in cum cupiditate dolor nam aperiam reprehenderit nisi? Quos consectetur voluptas odit quidem! Eaque obcaecati accusantium necessitatibus similique mollitia est hic asperiores odit, exercitationem facilis. Deleniti ab suscipit eaque numquam quam?.</p>
          </div>
          <div className='badges'>
            { school.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
        <div className='box'>
          <div>
            <p className='subtitle'>SOFTWARE ENGINEER INTERN</p>
            <a href='https://www.chef.gastrogate.com' className='title' target='_blank' rel='noopener noreferrer'><h4>GASTROGATE</h4><HiMiniArrowUpRight /></a>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium assumenda pariatur magnam, nulla minima adipisci iure. Qui corrupti minima tempora earum aliquid nostrum libero.</p>
          </div>
          <div className='badges'>
            { gastrogate.map(item => <TechBadge key={item.name} name={item.name} />) }
          </div>
        </div>
      </div>
      <p className='end'>If you're curious about what else I've been up to, feel free to <Link to='/contact' className='link'>contact me</Link>. I'd be glad to share my complete CV with you. As a teaser, I can reveal that it covers a mix of things like dance, logistics and tourism <BsFillEmojiSmileFill /></p>
    </div>
  )
}

export default ResumeView