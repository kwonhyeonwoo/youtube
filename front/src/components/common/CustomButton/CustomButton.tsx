import React from 'react'
import "./css/index.css";
type Props = {
    text: string;
    Active: () => void;
}
const CustomButton = ({ text, Active }: Props) => {
    return (
        <button onClick={Active} className='custom-button'>{text}</button>
    )
}

export default CustomButton