import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'
import ContactView from './Contact/ContactView'
import ResumeView from './Resume/ResumeView'
import PortfolioView from './Portfolio/PortfolioView'

const Views = () => {
  return (
    <div className='Views'>
        <Routes>
            <Route path='/' element={ <HomeView/> } />
            <Route path='/contact' element={ <ContactView /> } />
            <Route path='/resume' element={ <ResumeView /> } />
            <Route path='/portfolio' element={ <PortfolioView /> } />
        </Routes>
    </div>
  )
}

export default Views