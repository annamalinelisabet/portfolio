import { useEffect } from 'react'
import './ResumeView.css'
import { Link } from 'react-router-dom'
import { BiChevronsRight } from 'react-icons/bi'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import illustration from '../../assets/illustration-home.jpg'

const ResumeView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='ResumeView container'>
      <div className='top-wrapper'>
        <h1 className='header'>WORK & EDUCATION</h1>
        <div className='illustration-box'>
          <img src={illustration} alt="" />
        </div>
        <p className='text'>As a <span className='span-text'>frontend developer</span> my experience may not seem extensive on paper, but I can confidently assert that my skills and passion for web development are well-founded. Below, you'll find my past experiences on this developer journey. Perhaps your team will be the next exciting chapter?</p>
      </div>
      <div className='wrapper'>
        <div className='box'>
          <p className='subtitle'>FRONTEND DEVELOPER</p>
          <a href='https://ecutbildning.se/utbildningar/frontendutvecklare/' className='title' target='_blank' rel='noopener noreferrer'><h4>EC UTBILDNING</h4><BiChevronsRight /></a>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat repudiandae corrupti officiis maiores molestiae, beatae quia, nihil nostrum neque in cum cupiditate dolor nam aperiam reprehenderit nisi? Quos consectetur voluptas odit quidem! Eaque obcaecati accusantium necessitatibus similique mollitia est hic asperiores odit, exercitationem facilis. Deleniti ab suscipit eaque numquam quam?.</p>
        </div>
        <div className='box'>
          <p className='subtitle'>SOFTWARE ENGINEER INTERN</p>
          <a href='https://www.chef.gastrogate.com' className='title' target='_blank' rel='noopener noreferrer'><h4>GASTROGATE</h4><BiChevronsRight /></a>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium assumenda pariatur magnam, nulla minima adipisci iure. Qui corrupti minima tempora earum aliquid nostrum libero.</p>
        </div>
      </div>
      <p className='text end'>If you're curious about what else I've been up to, feel free to <Link to='/contact' className='link'>contact me</Link>. I'd be glad to share my complete CV with you. As a teaser, I can reveal that it covers a mix of things like dance, logistics and tourism <BsFillEmojiSmileFill /></p>
    </div>
  )
}

export default ResumeView