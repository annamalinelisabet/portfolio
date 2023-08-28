import { useEffect } from 'react'
import './ContactView.css'
import 'animate.css'
import illustration from '../../assets/illustration-home.jpg'
import { HiArrowLongDown } from 'react-icons/hi2'
import { AiFillLinkedin } from 'react-icons/ai'

const ContactView = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='ContactView container animate__animated animate__fadeIn animate__slow'>
      <h1>SAY HI</h1>
      <div className='wrapper'>
        <div className='illustration-box'>
          <img src={illustration} alt='Illustration of a person waving' />
        </div>
        <h4>and let's work together</h4>
      </div>
      
      <p className='text'>Don't hesitate to get in touch with me – I've made it incredibly simple! Just drop a message via the contact form provided below. But if that's not your style, feel free to shoot me an email at <a href='mailto:annamalinelisabet@gmail.com' className='email'>annamalinelisabet@gmail.com</a> or connect with me on <span className='linkedin'>LinkedIn.<a href='https://www.linkedin.com/in/anna-malin-elisabet-andersson' target='_blank' rel='noopener noreferrer'><AiFillLinkedin className='li-icon'/></a><HiArrowLongDown className='arrow'/></span></p>

      <form>
        <div className='input-control'>
          <label htmlFor='name'>Your name</label>
          <input type='text' name='name' />
        </div>
        <div className='input-control'>
          <label htmlFor='email'>Your email</label>
          <input type='email' name='email' />
        </div>
        <div className='input-control'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' className='message'></textarea>
        </div>
        <button className='btn btn-send'>SEND</button>
      </form>
    </div>
  )
}

export default ContactView