import React, { JSX } from 'react'; // импорт библиотеки

import styles from './input.module.css';

import man from './../../shared/images/man_icon.svg';
import mail from './../../shared/images/mail_icon.svg';
import padlock from './../../shared/images/padlock_icon.svg';

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

    const error = true;

    const inputWrapperClassName = error ? `${styles.inputField_wrapper} ${styles.inputField_wrapper_error}` : `${styles.inputField_wrapper}`;
    const icon = props.icon === 'man' ? man : (props.icon === 'mail' ? mail : padlock);

    return <div className={styles.input_wrapper}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label> 
        <div className={inputWrapperClassName}><img color={'red'} src={icon} alt={"Enter name"}/><input type="text" id={props.id} className={styles.input} placeholder = { props.placeholder }/></div>
        <div className={styles.errorCaption}>{error && 'Alarm!'}</div>
    </div>;
}