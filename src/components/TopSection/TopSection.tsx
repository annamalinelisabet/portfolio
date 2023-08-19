import './TopSection.css'
import 'animate.css'

interface TopSectionProps {
    header: string;
    src: string;
    alt: string;
    text: string;
}

const TopSection: React.FC<TopSectionProps> = ({ header, src, alt, text }) => {
  return (
    <div className='TopSection'>
        <h1 className='header'>{header}</h1>
        <div className='illustration-box'>
            <img src={src} alt={alt} />
        </div>
        <p className='text'>{text}</p>
    </div>
  )
}

export default TopSection