import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import './ContactView.css'
import 'animate.css'
import illustration from '../../assets/illustration-wave.jpg'
import { HiArrowLongDown } from 'react-icons/hi2'
import { AiFillLinkedin } from 'react-icons/ai'

const Form = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [state, handleSubmit] = useForm('xdorzwze', {
    data: { 'g-recaptcha-response': executeRecaptcha }
  })

  return state.succeeded ? (
    <div className='success'>
      <h3>MESSAGE SENT</h3>
      <p className='text'>I'll get back to you before you know it!</p>
    </div>
  ) : (
    <form className='flex-column' onSubmit={handleSubmit}>
      <div className='input-control flex-column'>
        <label htmlFor='name'>Your name</label>
        <input id='name' type='text' name='name' required />
      </div>
      <div className='input-control flex-column'>
        <label htmlFor='email'>Your email</label>
        <input id='email' type='email' name='email' required />
      </div>
      <div className='input-control flex-column'>
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' className='message' required></textarea>
      </div>
      <button className='btn btn-send' disabled={state.submitting}>{state.submitting ? 'Sending...' : 'SEND'}</button>
      <ValidationError className='error' errors={state.errors}/>
    </form>
  )
}

const ContactView = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='ContactView container pb-2 animate__animated animate__fadeIn animate__slower'>
      <h1>SAY HI</h1>
      <div className='wrapper'>
        <div className='illustration-box'>
          <img src={illustration} alt='Illustration of a person waving' />
        </div>
        <h4>and let's work together</h4>
      </div>
      
      <p className='text-xs'>Don't hesitate to get in touch with me – I've made it incredibly simple! Just drop a message via the contact form provided below. But if that's not your style, feel free to shoot me an email at <a href='mailto:annamalinelisabet@gmail.com' className='email'>annamalinelisabet@gmail.com</a> or connect with me on <span className='linkedin'>LinkedIn.<a href='https://www.linkedin.com/in/anna-malin-elisabet-andersson' target='_blank' rel='noopener noreferrer'><AiFillLinkedin className='li-icon'/></a><HiArrowLongDown className='arrow'/></span></p>
      
      <GoogleReCaptchaProvider reCaptchaKey='6LfTrg0oAAAAAA_CYhaFsW-Jr9UxxeUYTIeSGzU-'>
        <Form />
      </GoogleReCaptchaProvider>
    </div>
  )
}

export default ContactView