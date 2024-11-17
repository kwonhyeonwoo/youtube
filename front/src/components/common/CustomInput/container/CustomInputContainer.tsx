import React from 'react'
import CustomInput from '../CustomInput'
type Props = {
    type: string;
    placeholder: string;
    name: string;
    minLength?: number;
    maxLength?: number;
    value: string;
    UpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInputContainer = ({
    type,
    placeholder,
    name,
    minLength,
    maxLength,
    value,
    UpdateChange
}: Props) => {
    return (
        <CustomInput
            type={type}
            placeholder={placeholder}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            UpdateChange={UpdateChange}
        />
    )
}

export default CustomInputContainer