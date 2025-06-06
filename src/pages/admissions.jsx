import '../styles/general.css';
import { useNavigate } from 'react-router-dom';








const Admissions = () => {







const AdmissionCard = ({title,description}) => {
    const nav = useNavigate();
    return (
        <div className='general-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={()=>nav('/view')} className='admission-button'>Read More</button>
        </div>
    );
}





    return (
        <div className='bg'>
        <div className='admissions-header'>
              <h3 className='logo'>Npabase.</h3>
              <br/>
            <h1>Admissions</h1>
            <p>Get all the admission info and interview process in one place</p>
        </div>
        <div className='admissions-content'>
        <AdmissionCard title="Introducing Police Academy" description="Abrief Introduction to Polac Wudil, Kano." />
        <AdmissionCard title="Admissions Step 2" description="Exlore Navy admissions details, from eligibility criteria to application procedures and interview guidance." />
        <AdmissionCard title="Admissions Step 3" description="Get comprehensive information on Air Force admissions, including requirements, application steps, and interview preparation." />
        <AdmissionCard title="Admissions Step 4" description="Explore Army admissions details, from eligibility criteria to application procedures and interview guidance." />
        <AdmissionCard title="Admissions Step 5" description="Get comprehensive information on Police admissions, including requirements, application steps, and interview preparation." />
        </div>
         <div className='admissions-header'>
            <h1>Recent Updates</h1>
            <p>Get steady  fresh updates</p>
        </div>
        </div>
    );
    }

    export default Admissions;