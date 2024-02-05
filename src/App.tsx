import React from 'react';
import styles from './app.module.css';
import { SigninPage } from './pages/signinPage/signinPage';
import { SignupPage } from './pages/signupPage/signupPage';
import { ConfirmEmailPage } from './pages/confirmEmailPage/confirmEmailPage';
import { Routes, Route, useLocation } from 'react-router-dom';



function App() {

    const location = useLocation();
  return (
    <>
      <main className={styles.main}>
        <Routes location = {location}>
            <Route path="/" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/confirm_email" element={<ConfirmEmailPage />} />
            <Route path="*" element={<h1>Page don't exist</h1>} />
        </Routes>

      </main>
    </>
  );
}

export default App;
