import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
const Signup = () => {


const SignupHead = () => {
  return (
    <div className='signup-head'>
     
   
   <h3 className='logo'>Npabase.</h3>
      <br />
      <br />
      <h1>Welcome</h1>
      <p>Create an account to get started</p>
    </div>
  );
}

const SignupForm = () => {
  return (
    <form className='signup-form'>
      <br/>
      <input type='text' placeholder='Username' required />
       <input type='phone' placeholder='Phone' required />
        <input type='text' placeholder='State' required />
      <input type='email' placeholder='Email' required />
      <input type='password' placeholder='Password' required />
      <button  onClick={() => navigate('/password')} type='submit'>Sign Up</button>
      <hr/>
      <p>Or sign up with</p>
      <div className='signup-socials'>
        <img src={google} alt='google' /> continue with Google
      </div>
      


    </form>
  );
}

const Footer = () => {
return (
 <div className='signup-footer'>
  <div className='signup-footer-item'>
   
    <button 
      onClick={() => navigate('/login')}
      aria-label="Navigate to login page"
    >
      Already have an account? - Login
    </button>
  </div>
  
</div>
);
}


  return (
    <div className='auth'>
<SignupHead />
<SignupForm />
<Footer />

    </div>
  );
};

export default Signup;
