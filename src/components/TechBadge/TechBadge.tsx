import './TechBadge.css'

interface TechBadgeProps {
    name: string;
  }
  
  const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
    return (
      <div className='TechBadge'>
        <p className='name'>{name}</p>
      </div>
    )
  }
  
  export default TechBadge