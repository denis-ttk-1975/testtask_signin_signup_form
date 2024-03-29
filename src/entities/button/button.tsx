import React, { SyntheticEvent, JSX } from 'react'; // импорт библиотеки

import styles from './button.module.css';

interface IButtonProps {
    buttonText: string;
}

export const SubmitButton = (props: IButtonProps) => {

    return <button className={styles.submitButton} type='submit'>
        {props.buttonText}
    </button>;
}