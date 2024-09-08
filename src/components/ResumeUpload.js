import React, { useState } from 'react';
import styles from './ResumeUpload.module.css';

function ResumeUpload({ setResumeContent }) {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => setResumeContent(e.target.result);
      reader.readAsText(file);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.uploadTitle}>Upload Resume</h2>
      <div className={styles.fileInputWrapper}>
        <input
          type="file"
          onChange={handleFileUpload}
          className={styles.fileInput}
          id="resumeUpload"
          accept=".txt,.pdf,.doc,.docx"
        />
        <label htmlFor="resumeUpload" className={styles.fileInputLabel}>
          {fileName || 'Choose a file'}
        </label>
      </div>
    </div>
  );
}

export default ResumeUpload;