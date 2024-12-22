import React from 'react'
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import SearchContainer from '../Search/container/SearchContainer';
import CreateMenu from '../CreateMenu/CreateMenu';
type Props = {
    isMenuOpen: boolean;
    CreateMenuOpen: () => void;
    profileImg?: string;
}
const Header = ({ profileImg, isMenuOpen, CreateMenuOpen }: Props) => {
    return (
        <header className='header'>
            <Link to={"/"} className='logo-box'>
                <FontAwesomeIcon icon={faYoutube} size={"2x"} color='red' />
            </Link>
            <SearchContainer />
            <div className='profile-box'>
                <div className='create-menu-btn-wrapper'>
                    <button className='create-menu-btn' onClick={CreateMenuOpen}>+ 만들기</button>
                    {isMenuOpen && <CreateMenu />}
                </div>
                {
                    profileImg ? "" : (
                        <FontAwesomeIcon icon={faUser} size={"2xl"} color='white' />
                    )
                }

            </div>
        </header>
    )
}

export default Header