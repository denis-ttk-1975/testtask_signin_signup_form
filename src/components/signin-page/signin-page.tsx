import { JSX } from 'react'; // импорт библиотеки

import { FormHeader } from './../form-header/form-header';

import styles from './signin-page.module.css';

export const SignInPage = () => {
    return <section className={styles['signIn_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign in' substring = 'If you don’t have an account register' linkString = 'Register here !' />
        </div>
    </section>;
}

