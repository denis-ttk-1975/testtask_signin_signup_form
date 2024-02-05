import React, { JSX } from 'react'; // импорт библиотеки

import { FormHeader } from '../../features/form-header/form-header';
import { Form } from '../../features/form/form';
import { SocialNetworkBox } from '../../entities/socialNetworksBox/socialNetworksBox';

import { IInputProps } from './../../entities/input/input';

import useSignInStore from './store/signInStore';

import styles from './signin-area.module.css';

const inputArray: IInputProps[] = [
    {
        id : 'email',
        label: 'Email',
        icon: 'mail',
        placeholder: 'Enter your email address', 
        errorMessage: 'Invalid Email'
    },
    {
        id : 'password',
        label: 'Password',
        icon: 'padlock',
        placeholder: 'Enter your Password', 
        errorMessage: 'Invalid Password'
    }
];

export const SignInArea = () => {

    const { formState, setEmail, setPassword, checkEmail, checkPassword } = useSignInStore();

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log('formState: ', formState);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log('formState: ', formState);
    };

    inputArray[0].onChange = onChangeEmail;
    inputArray[1].onChange = onChangePassword;

    return <section className={styles['signIn_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign in' substring = 'If you don’t have an account register' linkString = 'Register here !' />
            <Form inputs = {inputArray} buttonText='Login'/>
            <div className={styles.footerBox}>
                <div className={styles.footerHeader}>or continue with</div>
                <SocialNetworkBox />
            </div>
        </div>

    </section>;
}

