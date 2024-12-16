import React from 'react'
import CustomButton from '../CustomButton'
type Props = {
    text: string;
    Active: () => void;
}
const CustomButtonContainer = ({ text, Active }: Props) => {
    return (
        <CustomButton text={text} Active={Active} />
    )
}

export default CustomButtonContainer