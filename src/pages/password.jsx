import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
const Password = () => {


const SignupHead = () => {
  return (
    <div className='signup-head'>
     
   
   <h3 className='logo'>Npabase.</h3>
      <br />
      <br />
      <h1>Recover Password</h1>
      <p>Lets get you back on board.</p>
    </div>
  );
}

const SignupForm = () => {
  return (
    <form className='signup-form'>
      <br/>
      <input type='email' placeholder='Email' required />
      <button type='submit'>Recover Password</button>
      <hr/>
    
      


    </form>
  );
}



  return (
    <div className='auth'>
<SignupHead />
<SignupForm />


    </div>
  );
};

export default Password;
