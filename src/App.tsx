import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';

import { ArtBoard } from './components/art-board/art-board';

function App() {
  return (
    <>
      <main className={styles.main}>
        <span>Your Logo</span>
        <ArtBoard />
      </main>
    </>
  );
}

export default App;
