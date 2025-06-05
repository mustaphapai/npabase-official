import '../styles/homepage.css';
import '../styles/general.css';
import { Globe, GraduationCap, ShoppingBag, BellDot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const HomeNav = () => {
    return (
      <div className='home-nav'>
        <div>
          <h3 className='logo'>Npabase.</h3>
        </div>
        <div className='home-nav-links'>
          <a href='#about'>About</a>
          <button className='button' onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    );
  }

  const HomeWelcome = () => {
    return (
      <div className='home-text-section'>
        <p className='npa-badge'>Npabase</p>
        <h1>Welcome to Npabase✨</h1>
        <p className='home-text'>
          You've taken the first step toward a noble mission: serving and protecting your nation.
        </p>
        <br/>
        <button onClick={() => navigate('/signup')} className='home-button'>Get Started</button>
        <hr/>
      </div>
    );
  }

  const HomeFeatureItem = ({ title, description, logo }) => {
    return (
      <div className='home-feature-item'>
        {logo}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  const HomeFeatures = () => {
    return (
      <div className='home-features'>
        <h4><span><h3 className='logo'>Npabase.</h3></span>Features</h4>
        <p>Whether you're preparing for exams or interviews, we're here to ensure you're ready for every challenge.</p>
        <div className='home-feature-list'>
          <HomeFeatureItem 
            title="Community" 
            description="A community of like-minded individuals, sharing ideas and experiences." 
            logo={<Globe size={"60px"} color='#065aae'/>} 
          />
          <HomeFeatureItem 
            title="Study" 
            description="Access free study materials, mock tests, and expert tips." 
            logo={<GraduationCap size={"60px"} color='#065aae'/>} 
          />
          <HomeFeatureItem 
            title="Gear Up" 
            description="Gear up with trusted interview essentials—uniforms, books, and more." 
            logo={<ShoppingBag size={"60px"} color='#065aae'/>} 
          />
          <HomeFeatureItem 
            title="Get Updates" 
            description="Get latest POLAC updates and never miss an announcement." 
            logo={<BellDot size={"60px"} color='#065aae'/>} 
          />
        </div>
      </div>
    );
  }

  const HomeAbout = () => {
    return (
      <div className='home-about' id="about">
        <h2>About Npabase</h2>
        <p>
          Becoming a police officer requires more than just hard work—it demands the right guidance, resources, and community support. Npabase is designed to simplify your preparation journey by providing everything you need in one place.
        </p>
      </div>
    );
  }

  const HomeFooter = () => {
    return (
      <footer className='home-footer'>
        <p>&copy; 2025 Npabase. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <div className='homepage'>
      <HomeNav />
      <HomeWelcome />
      <HomeFeatures/>
      <br/>
      <HomeAbout />
      <br/>
      <HomeFooter />
    </div>
  );
};

export default HomePage;