import { JSX } from 'react'; // импорт библиотеки

import styles from './form.module.css';

import { Input, IInputProps } from './../../features/input/input'

interface IFormProps {
    inputs: IInputProps[];
    buttonText: string;
}

export const Form = (props: IFormProps) => {
    return (
    <>
        {props.inputs.map((item) => {return <Input key = {'name'} id = {'name'} label = {'name'} icon = {'man'} placeholder = {'Enter your Name'} errorMessage={'Name must be longer than 3 chars'}/>})}
        <button>{props.buttonText}</button>
    </>
    );
}