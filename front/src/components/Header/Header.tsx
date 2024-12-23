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
    profileImg?: string;
    isLogin: boolean;
    CreateMenuOpen: () => void;
    LoginPageNavigate: () => void;
}
const Header = ({
    profileImg,
    isMenuOpen,
    isLogin,
    LoginPageNavigate,
    CreateMenuOpen
}: Props) => {
    console.log('isLogin', isLogin)
    return (
        <header className='header'>
            <Link to={"/"} className='logo-box'>
                <FontAwesomeIcon icon={faYoutube} size={"2x"} color='red' />
            </Link>
            <SearchContainer />
            <div className='profile-box'>

                {
                    isLogin ? (
                        !profileImg && isLogin &&
                        <>
                            <div className='create-menu-btn-wrapper'>
                                <button className='create-menu-btn' onClick={CreateMenuOpen}>+ 만들기</button>
                                {isMenuOpen && <CreateMenu />}
                            </div>
                            {profileImg ? "" : <FontAwesomeIcon icon={faUser} size={"2xl"} color='white' />}
                        </>
                    ) : (
                        <button
                            className='create-menu-btn'
                            onClick={LoginPageNavigate}
                        >
                            로그인
                        </button>
                    )
                }
            </div>
        </header>
    )
}

export default Header