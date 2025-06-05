import '../styles/homepage.css'; // Import your CSS file
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    state: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: formData.username
      });

      // Create user document in Firestore
      await createUserDocument(userCredential.user);

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      
      // Create user document in Firestore
      await createUserDocument(userCredential.user);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert(error.message);
    }
  };

  const createUserDocument = async (user) => {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name: user.displayName || formData.username,
        email: user.email,
        phone: formData.phone || '',
        password: formData.password || 'google-auth', // Note: Storing passwords is not recommended
        userId: user.uid,
        bookmarks: [],
        questions: [],
        state: formData.state || ''
      });
    } catch (error) {
      console.error('Error creating user document:', error);
    }
  };

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
  };

  const SignupForm = () => {
    return (
      <form className='signup-form' onSubmit={handleSubmit}>
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
        <button type='submit'>Sign Up</button>
        <hr/>
        <p>Or sign up with</p>
        <div className='signup-socials' onClick={handleGoogleSignIn}>
          <img src={google} alt='google' /> continue with Google
        </div>
      </form>
    );
  };

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
  };

  return (
    <div className='auth'>
      <SignupHead />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Signup;