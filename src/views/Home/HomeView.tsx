import { useEffect, useState } from 'react'
import './HomeView.css'
import { Link } from 'react-router-dom'
import illustration from '../../assets/illustration-home.jpg'
import photo from '../../assets/photo-home.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'


const HomeView = () => {

  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  return (
    <div className='HomeView'>

      <div className='hero-section container'>
        <div className='text-box'>
          <h1 className='header'>HELLO! I'm Malin</h1>
          <h2 className='subheader'>a <span className='span-text'>frontend developer</span></h2>
          <Link to='/contact'><div className={dark ? 'circle-btn dark-mode' : 'circle-btn'}>
            <p className='circle-text'>LET'S</p>
            <p className='circle-text'>TALK</p>
          </div></Link>
        </div>
        <div className='img-box'>
          <img src={illustration} alt="Illustration" />
        </div>
      </div>

      <div className='skills-section'>
        <div className='skills-box container'>
          <FaHtml5 className='skill lg'/>
          <FaCss3Alt className='skill lg'/>
          <BiLogoJavascript className='skill'/>
          <FaReact className='skill'/>
          <FaVuejs className='skill'/>
        </div>
        <Link to='/portfolio'>
          <div className='skills-text-wrapper'>
            <p className='skills-text'>See what I can do</p>
            <BsArrowRight className='arrow'/>
          </div>
        </Link>
      </div>

      <div className='about-section container'>
        <div className='about-img-box'>
          <img src={photo} alt='Photo of me' />
          <div className='about-img-bg'></div>
        </div>
        <div className='about-text-box'>
          <h2 className='about-title'>ABOUT</h2>
          <p className='about-text'>Initially captivated by an interest in design, I now find that the blend of design, coding, and problem-solving is what makes frontend development so incredibly enjoyable for me. I have a genuine passion for creating modern, user-friendly interfaces that provide exceptional user experiences.</p>
          <Link to='/resume'><button className='btn about-btn'>KNOW MORE</button></Link>
        </div>
      </div>

    </div>
  )
}

export default HomeView