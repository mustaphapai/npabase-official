import '../styles/homepage.css';
import '../styles/general.css';
import '../styles/auth.css';
import google from '../assets/google.png';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      console.error('Error sending reset email:', err);
      setError(getAuthErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  // Reuse your existing error message function
  const getAuthErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      default:
        return 'Failed to send reset email. Please try again.';
    }
  };

  const SignupHead = () => (
    <div className='signup-head'>
      <h3 className='logo'>Npabase.</h3>
      <br />
      <br />
      <h1>Recover Password</h1>
      <p>Let's get you back on board.</p>
    </div>
  );

  const SignupForm = () => (
    <form className='signup-form' onSubmit={handleSubmit}>
      {error && <p className='auth-error'>{error}</p>}
      {successMessage && <p className='auth-success'>{successMessage}</p>}
      <br/>
      <input 
        type='email' 
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Recover Password'}
      </button>
      <hr/>
      <div className='signup-footer-item'>
        <button 
          type='button' 
          onClick={() => navigate('/login')}
          style={{ marginTop: '20px' }}
        >
          Back to Login
        </button>
      </div>
    </form>
  );

  return (
    <div className='auth'>
      <SignupHead />
      <SignupForm />
    </div>
  );
};

export default Password;