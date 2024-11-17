import React from 'react'
import "./css/index.css";
type Props = {
    type: string;
    placeholder: string;
    name: string;
    minLength?: number;
    maxLength?: number;
    value: string;
    UpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({
    type,
    placeholder,
    name,
    minLength,
    maxLength,
    value,
    UpdateChange
}: Props) => {
    return (
        <input
            className='custom-input'
            type={type}
            placeholder={placeholder}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            onChange={() => { }}
            value={value}
        />
    )
}

export default CustomInput