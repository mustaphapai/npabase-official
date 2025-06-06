import '../styles/homepage.css';
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// --- Helper function to interpret Firebase Auth errors ---
const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email. Please sign up.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later or reset your password.';
    case 'auth/popup-closed-by-user':
      return 'The sign-in window was closed. Please try again.';
    case 'auth/cancelled-popup-request':
      return 'The sign-in process was cancelled. Please try again.';
    default:
      return 'Login failed. Please try again.';
  }
};

// --- Components defined OUTSIDE the main component ---
const LoginHead = () => (
  <div className='signup-head'>  {/* Changed back to signup-head to match your original */}
    <h3 className='logo'>Npabase.</h3>
    <br />
    <br />
    <h1>Welcome Back</h1>
    <p>Login to continue your journey</p>
  </div>
);

const LoginForm = ({ formData, handleChange, handleSubmit, isLoading, handleGoogleSignIn, error }) => {

   const navigate = useNavigate();
  return <form className='signup-form' onSubmit={handleSubmit}>  {/* Changed back to signup-form */}
    {error && <p className='auth-error'>{error}</p>}
    
    <br/>
    <input
      type='email'
      name='email'
      placeholder='Email'
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input  
      type='password'
      name='password'
      placeholder='Password'
      value={formData.password}
      onChange={handleChange}
      required
    />
    <button type='submit' disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Login'}  {/* Changed to match your signup button text */}
    </button>
    <div className='forgot-password'>
      <button type='button' onClick={() => navigate('/password')}>
        Forgot Password?
      </button>
    </div>
    <hr/>
    <p>Or login with</p>
    <div className='signup-socials' onClick={!isLoading ? handleGoogleSignIn : null}>  {/* Changed to signup-socials */}
      <img src={google} alt='google' /> continue with Google  {/* Lowercase to match signup */}
    </div>
  </form>
}

const Footer = ({ onNavigate }) => (
  <div className='signup-footer'>  {/* Changed to signup-footer */}
    <div className='signup-footer-item'>  {/* Changed to signup-footer-item */}
      <button
        onClick={onNavigate}
        aria-label="Navigate to signup page"
      >
        Don't have an account? - Sign Up
      </button>
    </div>
  </div>
);

// --- Main Login Component ---
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Check if user exists in Firestore
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        navigate('/dashboard');
      } else {
        // Create basic user document if it doesn't exist
        await setDoc(userDocRef, {
          email: userCredential.user.email,
          userId: userCredential.user.uid,
          createdAt: new Date()
        });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err.code, err.message);
      setError(getAuthErrorMessage(err.code));
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          name: userCredential.user.displayName || '',
          email: userCredential.user.email,
          userId: userCredential.user.uid,
          bookmarks: [],
          questions: [],
          createdAt: new Date()
        });
      }
      navigate('/dashboard');
    } catch (err) {
      console.error('Google sign-in error:', err.code, err.message);
      setError(getAuthErrorMessage(err.code));
      setIsLoading(false);
    }
  };

  return (
    <div className='auth'>
      <LoginHead />
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleGoogleSignIn={handleGoogleSignIn}
        error={error}
      />
      <Footer onNavigate={() => navigate('/signup')} />
    </div>
  );
};

export default Login;