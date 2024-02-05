import React from 'react';
import styles from './App.module.css';
import { SigninPage } from './pages/signinPage/signinPage';
import { SignupPage } from './pages/signupPage/signupPage';
import { ConfirmEmailPage } from './pages/confirmEmailPage/confirmEmailPage';



function App() {
  return (
    <>
      <main className={styles.main}>
        <SignupPage />
      </main>
    </>
  );
}

export default App;
