import React from 'react'
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Props = {
    SearchUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    SearchBtn: () => void;
}
const Search = ({ SearchUpdate, SearchBtn }: Props) => {
    return (
        <div className='search-wrapper'>
            <input
                type='text'
                className='search-input'
                placeholder='검색'
                onChange={SearchUpdate}
            />
            <button onClick={SearchBtn} className='search-btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='1x' />
            </button>
        </div>
    )
}

export default Search