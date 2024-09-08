import React from 'react';
import styles from './JobDescription.module.css';

function JobDescription({ setJobDescription }) {
  return (
    <div className={styles.descriptionContainer}>
      <h2 className={styles.descriptionTitle}>Job Description</h2>
      <textarea
        className={styles.descriptionInput}
        rows="10"
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste job description here..."
      />
    </div>
  );
}

export default JobDescription;