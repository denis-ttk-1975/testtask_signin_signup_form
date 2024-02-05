import React, { JSX, SyntheticEvent } from 'react'; // импорт библиотеки

import { userSignIn } from './../../shared/api/api';

import { FormHeader } from '../../features/form-header/form-header';
import { Form } from '../../features/form/form';
import { SocialNetworkBox } from '../../entities/socialNetworksBox/socialNetworksBox';

import { IInputProps } from './../../entities/input/input';

import useSignInStore from './store/signInStore';

import { complexPasswordRegex, emailRegex } from './../../shared/regex';

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
        checkEmail(true);
        setEmail(e.target.value);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkPassword(true);
        setPassword(e.target.value);
    };

    const onSubmitSignInForm = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        let formFailed = false;
        if (!emailRegex.test(formState.emailValue)) {checkEmail(false); formFailed = true;}
        if (!complexPasswordRegex.test(formState.passwordValue)) {checkPassword(false); formFailed = true;}

        if (formFailed) {
            return;
        }

        await userSignIn(formState.emailValue);

        return;

    };

    inputArray[0].onChange = onChangeEmail;
    inputArray[1].onChange = onChangePassword;
    inputArray[0].error = !formState.emailIsValid;
    inputArray[1].error = !formState.passwordIsValid;

    return <section className={styles['signIn_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign in' substring = 'If you don’t have an account register' linkString = 'Register here !' link = '/signup' />
            <Form inputs = {inputArray} buttonText='Login' submitHandler={onSubmitSignInForm} />
            <div className={styles.footerBox}>
                <div className={styles.footerHeader}>or continue with</div>
                <SocialNetworkBox />
            </div>
        </div>

    </section>;
}

