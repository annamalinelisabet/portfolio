import './Navbar.css'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { BsEyeglasses } from 'react-icons/bs'
import MobileMenu from '../MobileMenu/MobileMenu'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = showMobileMenu ? 'hidden' : 'unset';
    }
  }, [showMobileMenu])

  return (
    <div className='Navbar'>
      <div className='container'>
        <Link to='/'><BsEyeglasses className='logo'/></Link>
        <BiMenu className='bars' onClick={() => setShowMobileMenu(true)} />
        <ul className='nav-links'>
          <li><NavLink className='nav-link' to='/'>home</NavLink></li>
          <li><NavLink className='nav-link' to='/portfolio'>portfolio</NavLink></li>
          <li><NavLink className='nav-link' to='/resume'>resume</NavLink></li>
          <li><NavLink className='nav-link' to='/contact'>contact</NavLink></li>
        </ul>
      </div>
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
    </div>
  )
}

export default Navbar