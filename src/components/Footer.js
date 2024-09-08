import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>ResumeAnalyzer</div>
        <nav className={styles.footerNav}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
        <div className={styles.footerCopyright}>© 2023 ResumeAnalyzer. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
