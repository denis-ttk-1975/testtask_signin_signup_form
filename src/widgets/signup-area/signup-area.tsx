import React, { JSX } from 'react'; // импорт библиотеки

import { FormHeader } from '../../features/form-header/form-header';
import { Form } from '../../features/form/form';
import { SocialNetworkBox } from '../../entities/socialNetworksBox/socialNetworksBox';

import { IInputProps } from './../../entities/input/input'


import styles from './signup-area.module.css';

const inputArray: IInputProps[] = [
    {
        id : 'name',
        label: 'Name',
        icon: 'man',
        placeholder: 'Enter your Name', 
        errorMessage:'Name must be longer than 3 chars'
    },
    {
        id : 'email',
        label: 'Email',
        icon: 'mail',
        placeholder: 'Enter your email address', 
        errorMessage:'Invalid Email'
    },
    {
        id : 'password',
        label: 'Password',
        icon: 'padlock',
        placeholder: 'Enter your Password', 
        errorMessage:'Invalid Password'
    },
    {
        id : 'confirm_password',
        label: 'Confirm Password',
        icon: 'padlock',
        placeholder: 'Confirm your Password', 
        errorMessage:'Invalid Password'
    }
];

export const SignUpArea = () => {
    return <section className={styles['signUp_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign up' substring = 'If you already have an account register' linkString = 'Login here !' />
            <Form inputs = {inputArray} buttonText='Register'/>
        </div>

    </section>;
}