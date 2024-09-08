import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResumeAnalyzerPage from './pages/ResumeAnalyzerPage';
import Login from './components/Login';
import styles from './App.module.css';
import './global.css';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className={styles.app}>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={user ? <Navigate to="/analyze" /> : <Login />} />
          <Route 
            path="/analyze" 
            element={user ? <ResumeAnalyzerPage /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;