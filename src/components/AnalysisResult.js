import React from 'react';
import styles from './AnalysisResult.module.css';

function AnalysisResult({ result }) {
  const { overallScore, skillsAnalysis, experienceAnalysis, educationAnalysis, keywordAnalysis, suggestions } = result;

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.resultTitle}>Analysis Result</h2>
      <div className={styles.scoreCircle}>
        <svg viewBox="0 0 36 36" className={styles.circularChart}>
          <path className={styles.circleBg}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className={styles.circle}
            strokeDasharray={`${overallScore}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className={styles.percentage}>{overallScore}%</text>
        </svg>
      </div>

      <div className={styles.analysisSection}>
        <h3>Skills Match</h3>
        <p>Score: {skillsAnalysis.score}%</p>
        <p>Matching Skills: {skillsAnalysis.matching.join(', ')}</p>
        <p>Missing Skills: {skillsAnalysis.missing.join(', ')}</p>
      </div>

      <div className={styles.analysisSection}>
        <h3>Experience Match</h3>
        <p>Score: {experienceAnalysis.score}%</p>
        <p>Your Experience: {experienceAnalysis.resumeYears} years</p>
        <p>Required Experience: {experienceAnalysis.requiredYears} years</p>
      </div>

      <div className={styles.analysisSection}>
        <h3>Education Match</h3>
        <p>Score: {educationAnalysis.score}%</p>
        <p>Your Education: {educationAnalysis.resumeEducation}</p>
        <p>Required Education: {educationAnalysis.requiredEducation}</p>
      </div>

      <div className={styles.analysisSection}>
        <h3>Keyword Match</h3>
        <p>Score: {keywordAnalysis.score}%</p>
        <p>Matching Keywords: {keywordAnalysis.matching.join(', ')}</p>
      </div>

      <div className={styles.analysisSection}>
        <h3>Improvement Suggestions</h3>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnalysisResult;