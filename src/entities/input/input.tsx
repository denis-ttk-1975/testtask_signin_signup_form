import React, { JSX } from 'react'; // импорт библиотеки

import { ReactComponent as MailIcon } from './../../shared/images/mail_icon_temp.svg';
import { ReactComponent as ManIcon } from './../../shared/images/man_icon.svg';
import { ReactComponent as PadlockIcon } from './../../shared/images/padlock_icon.svg';

import styles from './input.module.css';

export interface IInputProps {
    id: string;
    label: string;
    icon: 'man' | 'mail' | 'padlock';
    placeholder: string;
    regex?: string;
    errorMessage: string;
    error?: boolean;
}

export const Input = (props: IInputProps) => {

    const error = false;

    const inputWrapperClassName = error ? `${styles.inputField_wrapper} ${styles.inputField_wrapper_error}` : `${styles.inputField_wrapper}`;
    const inputIconClassName = error ? `${styles.inputField_icon} ${styles.inputField_icon_error}` : `${styles.inputField_icon}`;

    const Icon = props.icon === 'man' ? ManIcon : (props.icon === 'mail' ? MailIcon : PadlockIcon);

    return <div className={styles.input_wrapper}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label> 
        <div className={inputWrapperClassName}><Icon className={inputIconClassName}/><input type="text" id={props.id} className={styles.input} placeholder = { props.placeholder }/></div>
        <div className={styles.errorCaption}>{error && 'Alarm!'}</div>

    </div>;
}