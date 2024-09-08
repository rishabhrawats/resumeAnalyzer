import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import styles from './Header.module.css';

function Header({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>ResumeAnalyzer</Link>
          <nav className={styles.nav}>
            {!user ? (
              <Link to="/login" className="btn">Get Started</Link>
            ) : (
              <>
                <Link to="/analyze" className={`btn ${styles.scanButton}`}>Scan Resume</Link>
                <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
