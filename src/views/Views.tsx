import { Routes, Route } from 'react-router-dom'
import HomeView from './Home/HomeView'
import ContactView from './Contact/ContactView'
import ResumeView from './Resume/ResumeView'
import PortfolioView from './Portfolio/PortfolioView'
import QuizAppView from './QuizAppProject/QuizAppView'
import PortfolioProjectView from './PortfolioProject/PortfolioProjectView'
import NotFound from './NotFound/NotFound'

const Views = () => {
  return (
    <div className='Views'>
        <Routes>
            <Route path='/' element={ <HomeView/> } />
            <Route path='/contact' element={ <ContactView /> } />
            <Route path='/resume' element={ <ResumeView /> } />
            <Route path='/portfolio' element={ <PortfolioView /> } />
            <Route path='/portfolio/1' element={ <QuizAppView /> } />
            <Route path='/portfolio/2' element={ <PortfolioProjectView /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    </div>
  )
}

export default Views