import '../styles/homepage.css';
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// --- Helper function to interpret Firebase Auth errors ---
const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email address is already in use. Please log in or use a different email.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'The password is too weak. It must be at least 6 characters long.';
    case 'auth/popup-closed-by-user':
      return 'The sign-in window was closed. Please try again.';
    case 'auth/cancelled-popup-request':
      return 'The sign-in process was cancelled. Please try again.';
    case 'auth/user-not-found':
       return 'No account found with this email. Please sign up.';
    case 'auth/wrong-password':
       return 'Incorrect password. Please try again.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};


// --- Components defined OUTSIDE the main component ---

const SignupHead = () => (
  <div className='signup-head'>
    <h3 className='logo'>Npabase.</h3>
    <br />
    <br />
    <h1>Welcome</h1>
    <p>Create an account to get started</p>
  </div>
);

const SignupForm = ({ formData, handleChange, handleSubmit, isLoading, handleGoogleSignIn, error }) => (
  <form className='signup-form' onSubmit={handleSubmit}>
    {/* Display Error Message Here */}
    {error && <p className='auth-error'>{error}</p>}
    <br/>
    <input
      type='text'
      name='username'
      placeholder='Username'
      value={formData.username}
      onChange={handleChange}
      required
    />
    <input
      type='tel'
      name='phone'
      placeholder='Phone'
      value={formData.phone}
      onChange={handleChange}
      required
    />
    <input
      type='text'
      name='state'
      placeholder='State'
      value={formData.state}
      onChange={handleChange}
      required
    />
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
      {isLoading ? 'Loading...' : 'Sign Up'}
    </button>
    <hr/>
    <p>Or sign up with</p>
    <div className='signup-socials' onClick={!isLoading ? handleGoogleSignIn : null}>
      <img src={google} alt='google' /> continue with Google
    </div>
  </form>
);

const Footer = ({ onNavigate }) => (
  <div className='signup-footer'>
    <div className='signup-footer-item'>
      <button
        onClick={onNavigate}
        aria-label="Navigate to login page"
      >
        Already have an account? - Login
      </button>
    </div>
  </div>
);


// --- Main Signup Component ---

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    state: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // State for error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createUserDocument = async (user, additionalData = {}) => {
    // This function is now more robust. It only attempts to create a doc.
    // Error handling for this specific step can be added if needed,
    // but the primary auth errors are handled in the sign-in functions.
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      name: user.displayName || additionalData.username || '',
      email: user.email,
      phone: additionalData.phone || '',
      state: additionalData.state || '',
      userId: user.uid,
      bookmarks: [],
      questions: []
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Clear previous errors
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.username
      });
      await createUserDocument(userCredential.user, formData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error signing up:', err.code, err.message);
      setError(getAuthErrorMessage(err.code)); // Set specific error message
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(''); // Clear previous errors
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      // Check if this is a new user or an existing user
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      // For Google Sign-In, we can simply create or overwrite the document
      // as it's a trusted source of user info.
      await createUserDocument(userCredential.user);

      navigate('/dashboard');
    } catch (err) {
      console.error('Error with Google sign-in:', err.code, err.message);
      setError(getAuthErrorMessage(err.code)); // Set specific error message
      setIsLoading(false);
    }
  };

  return (
    <div className='auth'>
      <SignupHead />
      <SignupForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleGoogleSignIn={handleGoogleSignIn}
        error={error} // Pass the error state as a prop
      />
      <Footer onNavigate={() => navigate('/login')} />
    </div>
  );
};

export default Signup;