import './MobileMenu.css'
import 'animate.css'
import { NavLink } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

export interface MobileMenuProps {
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setShowMobileMenu }) => {
    return (
        <div className='MobileMenu' onClick={() => setShowMobileMenu(false)}>
            <div className='container flex-column'>
                <MdClose className='close' />
                <ul className='mobile-links flex-column-align-center animate__animated animate__zoomIn animate__faster'>
                    <li><NavLink className='mobile-link' to='/'>home</NavLink></li>
                    <li><NavLink className='mobile-link' to='/portfolio'>portfolio</NavLink></li>
                    <li><NavLink className='mobile-link' to='/resume'>resume</NavLink></li>
                    <li><NavLink className='mobile-link' to='/contact'>contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu