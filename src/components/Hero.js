import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/analyze');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Analyze Your Resume and Land Your Dream Job</h1>
        <p className={styles.subtitle}>Our AI-powered resume analyzer helps you optimize your resume for any job application.</p>
        <button className={styles.ctaButton} onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/resume-analysis.svg" alt="Resume Analysis" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default Hero;