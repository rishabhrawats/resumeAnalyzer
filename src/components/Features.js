import React from 'react';
import styles from './Features.module.css';

const features = [
  { title: 'AI-Powered Analysis', description: 'Our advanced AI analyzes your resume against job descriptions.' },
  { title: 'Skill Matching', description: 'Identify missing skills and areas for improvement.' },
  { title: 'ATS Optimization', description: 'Ensure your resume passes Applicant Tracking Systems.' },
];

function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>Features</h2>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
