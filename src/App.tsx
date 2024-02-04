import React from 'react';
import styles from './App.module.css';
import { ArtBoard } from './widgets/art-board/art-board';
import { SignInArea } from './widgets/signin-area/signin-area';



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
