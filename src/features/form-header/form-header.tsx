import React, { JSX } from 'react'; // импорт библиотеки

import styles from './form-header.module.css';
import { Link } from 'react-router-dom';

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
                You can <Link to={ props.link ?? '#'} className={styles.linkString}>{props.linkString}</Link>
            </div></div>
    </>;
}