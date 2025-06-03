 import '../styles/general.css'
import { Globe, GraduationCap, ShoppingBag, BellDot ,CircleUser,Search,FileText,ExternalLink } from 'lucide-react';  



 const Study = () => {






const StudyCardItem = ({ title, description }) => {
  return (
    <div className='study-card-item-info'>
      <FileText />
     <div className="card-info"> <h3 className='card-title'>{title}</h3>
      <p className='card-description'>{description}</p></div>
    <button className='btn'><div className='btn-download'><p>Open</p> <ExternalLink /></div></button>
    </div>
  );
}


const StudyCard = () => {
  return (
    <div className='study-card'>
      
     
     <div className='study-card-items'>
 
        <StudyCardItem title="RC 1 PQ." description="Download course materials and resources." />
        <StudyCardItem title="RC 2 PQ." description="Watch tutorials to enhance your learning." />
        <StudyCardItem title="RC 3 PQ." description="Join discussions with peers and instructors." />
         <StudyCardItem title="RC 1 PQ." description="Download course materials and resources." />
        <StudyCardItem title="RC 2 PQ." description="Watch tutorials to enhance your learning." />
        <StudyCardItem title="RC 3 PQ." description="Join discussions with peers and instructors." />

      </div>
    </div>
  );
}





   return (
     <div className='view-post'>
         <h3 className='logo'>Npabase.</h3>
       <div className='study-header'>
         <h1>Study Resources</h1>
         <p>Explore a wide range of study materials to help you prepare for your exams and interviews.</p>
       </div>
       <div className='study-content'>
        <StudyCard />
       </div>
     </div>
   );
 }

 export default Study;