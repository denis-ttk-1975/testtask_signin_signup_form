import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';

import { ArtBoard } from './components/art-board/art-board';
import { SignInPage } from './components/signin-page/signin-page';



function App() {
  return (
    <>
      <main className={styles.main}>
        <SignInPage />
        <ArtBoard />
      </main>
    </>
  );
}

export default App;
