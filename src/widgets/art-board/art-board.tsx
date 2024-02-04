import React, { JSX } from 'react'; // импорт библиотеки

import styles from './art-board.module.css';

export interface IArtBoardProps {
    title: string;
}

export const ArtBoard = (props: IArtBoardProps) => {
  return <div className={styles.artBoard}>
        <div className={styles.artBoard_textBox}>
            <div className={styles.artBoard_title}>{props.title}</div>
            <div className={styles.artBoard_subtitle}>Lorem Ipsum is simply</div>
        </div>
    </div>;
}

