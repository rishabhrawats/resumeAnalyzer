import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Optimize Your Resume with AI</h1>
          <p className={styles.subtitle}>Get personalized insights and improve your chances of landing your dream job.</p>
          <Link to="/login" className={styles.ctaButton}>Get Started</Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>AI-Powered Analysis</h3>
              <p>Our advanced AI analyzes your resume against job descriptions to provide tailored recommendations.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Skill Gap Identification</h3>
              <p>Quickly identify missing skills and areas for improvement in your resume.</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📊</div>
              <h3>ATS Optimization</h3>
              <p>Ensure your resume is optimized for Applicant Tracking Systems (ATS) used by employers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Upload Your Resume</h3>
              <p>Simply upload your current resume in PDF or Word format.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Provide Job Description</h3>
              <p>Paste the job description you're interested in applying for.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Get Instant Feedback</h3>
              <p>Receive detailed analysis and suggestions to improve your resume.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.articles}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <div className={styles.articleGrid}>
            <div className={styles.articleCard}>
              <img src="/path-to-image1.jpg" alt="Article 1" className={styles.articleImage} />
              <h3>10 Tips for a Standout Resume</h3>
              <p>Learn how to make your resume stand out from the crowd...</p>
              <a href="#" className={styles.readMore}>Read More</a>
            </div>
            <div className={styles.articleCard}>
              <img src="/path-to-image2.jpg" alt="Article 2" className={styles.articleImage} />
              <h3>Mastering the Art of the Cover Letter</h3>
              <p>Discover the secrets to writing a compelling cover letter...</p>
              <a href="#" className={styles.readMore}>Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
