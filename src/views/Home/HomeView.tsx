import './HomeView.css'
import { Link } from 'react-router-dom'
import illustration from '../../assets/illustration-home.jpg'
import photo from '../../assets/photo-home.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'


const HomeView = () => {
  return (
    <div className='HomeView'>

      <div className='hero-section container'>
        <div className='text-box'>
          <h1 className='header'>WELCOME! I'm Malin</h1>
          <h2 className='subheader'>a <span className='span-text'>frontend developer</span></h2>
          <Link to='/contact'>
            <div className='circle-btn'>
              <p className='circle-text'>LET'S</p>
              <p className='circle-text'>TALK</p>
            </div>
          </Link>
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
            <p className='skills-text'>Take a closer look at my skills</p>
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
          <p className='about-text'>Initially captivated by a fascination for design, I now find that the combination of design, coding, and problem-solving is what makes frontend development so incredibly enjoyable for me. I have a genuine passion for creating modern, user-friendly interfaces that deliver exceptional user experiences.</p>
          <Link to='/resume'><button className='btn about-btn'>KNOW MORE</button></Link>
        </div>
      </div>

    </div>
  )
}

export default HomeView