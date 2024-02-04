import { JSX } from 'react'; // импорт библиотеки

import { FormHeader } from '../../features/form-header/form-header';
import { Form } from '../../features/form/form';
import { SocialNetworkBox } from '../../entities/socialNetworksBox/socialNetworksBox';

import { IInputProps } from './../../entities/input/input'




import styles from './signin-area.module.css';

const inputArray: IInputProps[] = [
    // {
    //     id : 'name',
    //     label: 'Name',
    //     icon: 'man',
    //     placeholder: 'Enter your Name', 
    //     errorMessage:'Name must be longer than 3 chars'
    // },
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
    }
];

export const SignInArea = () => {
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

