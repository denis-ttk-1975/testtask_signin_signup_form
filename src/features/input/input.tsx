import { JSX } from 'react'; // импорт библиотеки

import styles from './input.module.css';

import man from './../../shared/images/man_icon.svg';

export interface IInputProps {
    id: string;
    label: string;
    icon: string;
    placeholder: string;
    regex?: string;
    errorMessage: string;
    error?: boolean;
}

export const Input = (props: IInputProps) => {

    const inputClassName = '${styles.input}' + (props.error && '${styles.error}');
    return <div className={styles.input_wrapper}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label> 
        <div><img src={man} alt={"Enter name"}/><input type="text" id={props.id} className={styles.input} placeholder = { props.placeholder }/></div>
    </div>;
}