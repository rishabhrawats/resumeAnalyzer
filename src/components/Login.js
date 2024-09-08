import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/analyze');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/analyze');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formBox}>
        <div className={styles.buttonBox}>
          <div 
            className={`${styles.btn} ${!isSignUp ? styles.active : ''}`} 
            onClick={() => setIsSignUp(false)}
          >
            Login
          </div>
          <div 
            className={`${styles.btn} ${isSignUp ? styles.active : ''}`} 
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className={styles.divider}>
          <span>OR</span>
        </div>
        <button onClick={handleGoogleSignIn} className={styles.googleButton}>
          <img src="/google-icon.png" alt="Google" className={styles.googleIcon} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
