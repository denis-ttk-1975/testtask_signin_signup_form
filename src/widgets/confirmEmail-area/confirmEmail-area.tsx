import React, { JSX } from 'react'; // импорт библиотеки

import gmail from './../../shared/images/gmail.svg';

import styles from './confirmEmail-area.module.css';

export const ConfirmEmailArea = () => {
    return <section className={styles['confirmEmail_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <div className={styles.title}>Welcome</div>
            <div className={styles.subtitle}>Confirm your email please</div>
            <div className={styles.icon}><img src={gmail} alt={"GMail"} /></div>
        </div>

    </section>;
}