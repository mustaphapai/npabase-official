import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/dashboard.css'; // Import your CSS file for the dashboard
import { Globe, GraduationCap, ShoppingBag, BellDot ,CircleUser,Search,FileText,ExternalLink } from 'lucide-react';  
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
const nav = useNavigate();

 const DashboardNav = () => {
    return (
      <div className='dash-nav'>
        <div>
          <h3 className='logo'>Npabase.</h3>
        </div>

        <div className='dash-icons'>
         
         <CircleUser />
         <br />
         <BellDot/>
         <Search />
        </div>
       
      </div>
    );
  }





const DashboardCategories = ()=>{
  return (
    <div className='dashboard-category'>
      <div className='category'>
        <Globe size={"30px"} color='#065aae'/>
        <h4>Study</h4>
        
      </div>
      <div className='category'>
        <GraduationCap size={"30px"} color='#065aae'/>
        <h4>Community</h4>
       
      </div>
      <div className='category'>
        <ShoppingBag size={"30px"} color='#065aae'/>
        <h4>Marketplace</h4>
        
      </div>
    </div>
  );
}


const AdmissionCard = () => {
  return (
    <div className='admission-card'>
       <GraduationCap size={"30px"} color='#065aae'/>
      <h2>Admissions</h2>
      <p>get all the admission info and interview process in one place</p>
      <button onClick={()=>nav('/admissions')} className='admission-button'>continue</button>
    </div>
  );
}



const StudyCardItem = ({ title, description }) => {
  return (
    <div className='study-card-item'>
      <FileText />
      <h3>{title}</h3>
     <ExternalLink />
    </div>
  );
}


const StudyCard = () => {
  return (
    <div className='study-card'>
      
     
     <div className='study-card-items'>
      <h2>Study Materials</h2>
      <p>Access a wide range of study materials.</p>
        <StudyCardItem title="RC 1 PQ." description="Download course materials and resources." />
        <StudyCardItem title="RC 2 PQ." description="Watch tutorials to enhance your learning." />
        <StudyCardItem title="RC 3 PQ." description="Join discussions with peers and instructors." />
         <button onClick={()=>nav('/study')} className='btn'>show all</button>
      </div>
    </div>
  );
}

const MarketplaceCard = () => {
  return (
    <div className='market-card'>
      <ShoppingBag size={"30px"} color='#065aae'/>
      <h2>Marketplace</h2>
      <p>Explore the marketplace for study materials and interview materials.</p>
      <button className='marketplace-button'>Shop Now</button>
    </div>
  );
}


const DashboardFeedListItem = ({ title, description }) => {
  return (
    <div className='dashboard-feed-item'>
      <h3>{title}</h3>
     <img src={`https://source.unsplash.com/150x100/?${title}`} alt="Feed Item" className='feed-item-image' />
      <p>{description}</p>
      <button className='feed-item-button'>Read More</button>
    </div>
  );
}


const DashboardFeedList = () => {
  return (
    <div className='dashboard-feed'>
      <h2>Feed</h2>
      <p>Stay updated with the latest news and discussions.</p>
   <div>
        <DashboardFeedListItem title="Latest Updates" description="Get the latest updates on admissions and courses." />
        <DashboardFeedListItem title="Community Discussions" description="Join discussions with fellow students and instructors." />
        <DashboardFeedListItem title="Marketplace Offers" description="Check out the latest offers in the marketplace." />
      </div>
      <div className='feed-button'>
        <button className='btn'>show all</button>
   </div>
    </div>
  );
}







const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
      <h1>Updates</h1>
      <p>get all the updates you need.</p>
     <div className='dashboard-content-items'>
      { <AdmissionCard/>}
       <StudyCard />
       <MarketplaceCard />
        <DashboardFeedList />
      </div>
    </div>
  );  
}










  return (
    <div className='dashboard'>
<DashboardNav />
<DashboardCategories/>
<DashboardContent />


    </div>
  );
};

export default DashBoard;
