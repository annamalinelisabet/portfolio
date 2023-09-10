import './HomeView.css'
import 'animate.css'
import { Link } from 'react-router-dom'
import illustration from '../../assets/illustration-home.jpg'
import photo from '../../assets/photo-home.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'


const HomeView = () => {
  return (
    <div className='HomeView'>

      <div className='hero-section container flex-column'>
        <div className='text-box flex-column-align-center'>
          <h1 className='header animate__animated animate__fadeInLeft animate__slow'>HEY THERE, I'm Malin</h1>
          <h2 className='subheader animate__animated animate__fadeInLeft animate__slow'>a <span className='span-text'>frontend developer</span></h2>
          <Link to='/portfolio'>
            <div className='circle-btn flex-column-align-center animate__animated animate__fadeInRight animate__slow'>
              <p className='circle-text'>MY</p>
              <p className='circle-text'>WORK</p>
            </div>
          </Link>
        </div>
        <div className='img-box animate__animated animate__fadeInUp animate__slow'>
          <img src={illustration} alt='Illustration' />
        </div>
      </div>

      <div className='skills-section'>
        <div className='skills-box container' data-aos='fade-up' data-aos-duration='1500'>
          <FaHtml5 className='skill lg'/>
          <FaCss3Alt className='skill lg'/>
          <BiLogoJavascript className='skill'/>
          <FaReact className='skill'/>
          <FaVuejs className='skill'/>
        </div>
        <Link to='/resume'>
          <div className='skills-text-wrapper flex-align-center' data-aos='fade-up' data-aos-duration='1500'>
            <p className='skills-text'>My tech experience</p>
            <BsArrowRight className='arrow'/>
          </div>
        </Link>
      </div>

      <div className='about-section container' data-aos='fade-up' data-aos-duration='1500' data-aos-offset='200'>
        <div className='about-img-box'>
          <img src={photo} alt='Photo of me' />
          <div className='about-img-bg'></div>
        </div>
        <div className='about-text-box'>
          <h2 className='about-title'>THAT'S ME</h2>
          <p className='text'>Initially drawn by a fascination for design, I now find that the combination of coding, problem-solving and design is what makes frontend development so incredibly enjoyable for me. As a web developer, I have a genuine passion for crafting pixel-perfect, responsive interfaces that deliver exceptional user experiences.</p>
          <Link to='/contact'><button className='btn about-btn'>LET'S TALK</button></Link>
        </div>
      </div>

    </div> 
  )
}

export default HomeView