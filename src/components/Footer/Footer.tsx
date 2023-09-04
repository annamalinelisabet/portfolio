import './Footer.css'
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='Footer pb-2'>
      <div className='container'>
        <div className='footer-text-box'>
          <div className='copy-wrapper flex-align-center'>
            <p className='footer-text'>All rights reserved by me</p>
            <BiCopyright />
            <p className='footer-text'>2023</p>
          </div>
          <p className='footer-text'>Illustrations made by <a href='https://www.instagram.com/morkbjornart/' className='link' target='_blank' rel='noopener noreferrer'>Morkbjorn</a></p>
        </div>
        <div className='footer-icons'>
          <a href='mailto:annamalinelisabet@gmail.com'><AiOutlineMail className='icon' /></a>
          <a href='https://github.com/annamalinelisabet' target='_blank' rel='noopener noreferrer' aria-label='Link to GitHub profile'><AiOutlineGithub className='icon' /></a>
          <a href='https://www.linkedin.com/in/anna-malin-elisabet-andersson' target='_blank' rel='noopener noreferrer' aria-label='Link to LinkedIn profile'><AiFillLinkedin className='icon' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer