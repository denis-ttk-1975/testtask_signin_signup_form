import { JSX } from 'react'; // импорт библиотеки

import { FormHeader } from '../form-header/form-header';
import { Form } from '../form/form';



import styles from './signin-area.module.css';

const inputArray = [
    {
        id : 'name',
        label: 'name',
        icon: 'man',
        placeholder: 'Enter your Name', 
        errorMessage:'Name must be longer than 3 chars'
    }
];

export const SignInArea = () => {
    return <section className={styles['signIn_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign in' substring = 'If you don’t have an account register' linkString = 'Register here !' />
            <Form inputs = {inputArray} buttonText='Button'/>
        </div>
    </section>;
}

