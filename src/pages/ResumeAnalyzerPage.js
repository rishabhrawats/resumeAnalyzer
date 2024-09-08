import React, { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';
import JobDescription from '../components/JobDescription';
import AnalysisResult from '../components/AnalysisResult';
import styles from './ResumeAnalyzerPage.module.css';

function ResumeAnalyzerPage() {
  const [resumeContent, setResumeContent] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const analyzeResume = () => {
    // Convert resume and job description to lowercase for case-insensitive matching
    const resumeLower = resumeContent.toLowerCase();
    const jobLower = jobDescription.toLowerCase();

    // Extract skills from job description (assuming skills are listed with commas)
    const requiredSkills = jobLower.match(/skills:(.+)/i)?.[1].split(',').map(skill => skill.trim()) || [];

    // Check for skills in resume
    const matchingSkills = requiredSkills.filter(skill => resumeLower.includes(skill));
    const missingSkills = requiredSkills.filter(skill => !resumeLower.includes(skill));

    // Calculate skills match percentage
    const skillsScore = Math.round((matchingSkills.length / requiredSkills.length) * 100);

    // Experience analysis (assuming experience is mentioned in years)
    const resumeExperience = resumeLower.match(/(\d+)\s*years?\s*of?\s*experience/i);
    const jobExperience = jobLower.match(/(\d+)\s*years?\s*of?\s*experience/i);
    const resumeYears = resumeExperience ? parseInt(resumeExperience[1]) : 0;
    const requiredYears = jobExperience ? parseInt(jobExperience[1]) : 0;
    const experienceScore = Math.min(Math.round((resumeYears / requiredYears) * 100), 100);

    // Education analysis (basic check for degree mention)
    const educationLevels = ['bachelor', 'master', 'phd', 'doctorate'];
    const resumeEducation = educationLevels.find(level => resumeLower.includes(level)) || 'Not specified';
    const requiredEducation = educationLevels.find(level => jobLower.includes(level)) || 'Not specified';
    const educationScore = resumeEducation === requiredEducation ? 100 : 50;

    // Keywords analysis
    const jobKeywords = jobLower.split(/\s+/).filter(word => word.length > 3);
    const matchingKeywords = jobKeywords.filter(word => resumeLower.includes(word));
    const keywordScore = Math.round((matchingKeywords.length / jobKeywords.length) * 100);

    // Calculate overall score
    const overallScore = Math.round((skillsScore + experienceScore + educationScore + keywordScore) / 4);

    // Generate improvement suggestions
    const suggestions = [];
    if (missingSkills.length > 0) {
      suggestions.push(`Consider adding these skills to your resume: ${missingSkills.join(', ')}`);
    }
    if (resumeYears < requiredYears) {
      suggestions.push(`The job requires ${requiredYears} years of experience. Highlight your most relevant experience.`);
    }
    if (resumeEducation !== requiredEducation) {
      suggestions.push(`The job prefers a ${requiredEducation}'s degree. Make sure your education section is prominent.`);
    }
    if (keywordScore < 70) {
      suggestions.push('Try to incorporate more keywords from the job description into your resume.');
    }

    setAnalysisResult({
      overallScore,
      skillsAnalysis: {
        score: skillsScore,
        matching: matchingSkills,
        missing: missingSkills,
      },
      experienceAnalysis: {
        score: experienceScore,
        resumeYears,
        requiredYears,
      },
      educationAnalysis: {
        score: educationScore,
        resumeEducation,
        requiredEducation,
      },
      keywordAnalysis: {
        score: keywordScore,
        matching: matchingKeywords,
      },
      suggestions,
    });
  };

  return (
    <div className={styles.analyzerPage}>
      <div className="container">
        <main className={styles.main}>
          <h1 className={styles.title}>Resume Analyzer</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputSection}>
              <h2 className={styles.sectionTitle}>Upload Resume</h2>
              <ResumeUpload setResumeContent={setResumeContent} />
            </div>
            <div className={styles.inputSection}>
              <h2 className={styles.sectionTitle}>Job Description</h2>
              <JobDescription setJobDescription={setJobDescription} />
            </div>
          </div>
          <button 
            className={styles.analyzeButton} 
            onClick={analyzeResume} 
            disabled={!resumeContent || !jobDescription}
          >
            Analyze Resume
          </button>
          {analysisResult && (
            <div className={styles.resultSection}>
              <AnalysisResult result={analysisResult} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ResumeAnalyzerPage;
