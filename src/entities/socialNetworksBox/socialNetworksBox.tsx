import React, { JSX } from 'react'; // импорт библиотеки

import apple from './../../shared/images/apple_icon.svg';
import fb from './../../shared/images/facebook_icon.svg';
import google from './../../shared/images/google_icon.svg';

import styles from './socialNetworksBox.module.css';

export const SocialNetworkBox = () => {

    return <div className={styles.iconBox}>
        <a target='_blank' rel='noopener noreferrer' href="https://facebook.com" className={styles.ref}><img src={fb} alt={"Facebook"}/></a>
        <a target='_blank' rel='noopener noreferrer' href="https://apple.com" className={styles.ref}><img src={apple} alt={"Apple"}/></a>
        <a target='_blank' rel='noopener noreferrer' href="https://google.com" className={styles.ref}><img src={google} alt={"Google"}/></a>
    </div>;
}