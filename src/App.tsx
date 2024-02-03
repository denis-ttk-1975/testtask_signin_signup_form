import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';

import { ArtBoard } from './components/art-board/art-board';
import { SignInArea } from './components/signin-area/signin-area';



function App() {
  return (
    <>
      <main className={styles.main}>
        <SignInArea />
        <ArtBoard />
      </main>
    </>
  );
}

export default App;
