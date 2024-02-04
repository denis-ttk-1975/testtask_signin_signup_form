import { JSX } from 'react'; // импорт библиотеки

import styles from './form.module.css';

import { Input, IInputProps } from './../../features/input/input'
import { SubmitButton } from './../../features/button/button'


interface IFormProps {
    inputs: IInputProps[];
    buttonText: string;
}

export const Form = (props: IFormProps) => {
    return (
    <>
        {props.inputs.map((item) => {return <Input key = {item.id} id = {item.id} label = {item.label} icon = {item.icon} placeholder = {item.placeholder} errorMessage={item.errorMessage}/>})}
        <SubmitButton buttonText = {props.buttonText}/>
    </>
    );
}