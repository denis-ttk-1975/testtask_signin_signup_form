import { JSX } from 'react'; // импорт библиотеки

import styles from './art-board.module.css';

export const ArtBoard = () => {
  return <div className={styles.artBoard}>
        <div className={styles.artBoard_textBox}>
            <div className={styles.artBoard_title}>Sign in to name</div>
            <div className={styles.artBoard_subtitle}>Lorem Ipsum is simply</div>
        </div>
    </div>;
}

