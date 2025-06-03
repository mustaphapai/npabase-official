import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
const Login = () => {


const SignupHead = () => {
  return (
    <div className='signup-head'>
     
   
   <h3 className='logo'>Npabase.</h3>
      <br />
      <br />
      <h1>Welcome back,</h1>
      <p>login to continue.</p>
    </div>
  );
}

const SignupForm = () => {
  return (
    <form className='signup-form'>
      <br/>
      <input type='email' placeholder='Email' required />
      <input type='password' placeholder='Password' required />
      <button type='submit'>Login</button>
      <hr/>
      <p>Or login with</p>
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
      Not yet Signed Up ? - Sign Up
    </button>



     <button 
      onClick={() => navigate('/login')}
      aria-label="Navigate to login page"
    >
      Forgot your password ? - Recover
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

export default Login;
