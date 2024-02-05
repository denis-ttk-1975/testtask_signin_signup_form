import React, { SyntheticEvent, JSX } from 'react'; // импорт библиотеки

import { userCreate } from './../../shared/api/api';

import { FormHeader } from '../../features/form-header/form-header';
import { Form } from '../../features/form/form';
import useSignUpStore from './store/signUpStore';

import { IInputProps } from './../../entities/input/input';

import { complexPasswordRegex, emailRegex, threeCharsOrDigitsRegex } from './../../shared/regex';


import styles from './signup-area.module.css';

const inputArray: IInputProps[] = [
    {
        id : 'name',
        label: 'Name',
        icon: 'man',
        placeholder: 'Enter your Name',
        errorMessage:'Name must be longer than 3 LATIN chars'
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
        errorMessage:'Invalid Confirmation of Password'
    }
];

export const SignUpArea = () => {

    const { formState, setName, setEmail, setPassword, setConfirmPassword, checkName, checkEmail, checkPassword, checkConfirmPassword } = useSignUpStore();

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkName(true);
        setName(e.target.value);
    };
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkEmail(true);
        setEmail(e.target.value);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkPassword(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkConfirmPassword(true);
        setConfirmPassword(e.target.value);
    };

    const onSubmitSignUpForm = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        let formFailed = false;
        if (!threeCharsOrDigitsRegex.test(formState.nameValue)) {checkName(false); formFailed = true;}
        if (!emailRegex.test(formState.emailValue)) {checkEmail(false); formFailed = true;}
        if (!complexPasswordRegex.test(formState.passwordValue)) {checkPassword(false); formFailed = true;}
        if (formState.passwordValue !== formState.confirmPasswordValue) {checkConfirmPassword(false); formFailed = true;}

        if (formFailed) {
            return;
        }

        await userCreate({name: formState.nameValue, email: formState.emailValue, password: formState.passwordValue});

        return;
    };

    inputArray[0].onChange = onChangeName;
    inputArray[1].onChange = onChangeEmail;
    inputArray[2].onChange = onChangePassword;
    inputArray[3].onChange = onChangeConfirmPassword;
    inputArray[0].error = !formState.nameIsValid;
    inputArray[1].error = !formState.emailIsValid;
    inputArray[2].error = !formState.passwordIsValid;
    inputArray[3].error = !formState.confirmPasswordIsValid;

    return <section className={styles['signUp_Page']}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.form_wrapper}>
            <FormHeader title = 'Sign up' substring = 'If you already have an account register' linkString = 'Login here !' />
            <Form inputs = {inputArray} buttonText='Register' submitHandler={onSubmitSignUpForm}/>
        </div>
    </section>;
}