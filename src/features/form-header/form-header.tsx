import React, { JSX } from 'react'; // импорт библиотеки

import styles from './form-header.module.css';

interface IFormHeaderProps {
    title: string;
    substring: string;
    linkString: string;
    link?: string;
}

export const FormHeader = (props: IFormHeaderProps) => {
    return <>
    <div className={styles.formHeaderWrapper} >
            <div className={styles.title}>{props.title}</div>
            <div className={styles.substring}>{props.substring}</div>
            <div className={styles.substring}>
                You can <a href={ props.link ?? '#'} className={styles.linkString}>{props.linkString}</a>
            </div></div>
    </>;
}