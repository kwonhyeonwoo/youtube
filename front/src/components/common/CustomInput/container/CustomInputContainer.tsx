import React, { useCallback } from 'react'
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
    const Update = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (UpdateChange) {
                UpdateChange(e);
            }
        },
        [UpdateChange],
    )
    return (
        <CustomInput
            type={type}
            placeholder={placeholder}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            UpdateChange={Update}
        />
    )
}

export default CustomInputContainer