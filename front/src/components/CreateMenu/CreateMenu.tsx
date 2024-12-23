import React from 'react'
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom'

const CreateMenu = () => {
    return (
        <div className='menu-wrapper'>
            {menuLists.map(({ link, svg, list }, idx) => (
                <Link to={link} className='menu-list' key={idx} >
                    {svg}
                    <p className='menu-title'>{list}</p>
                </Link>
            ))}
        </div>
    )
};

export default CreateMenu;

const menuLists = [
    {
        link: "/video/create",
        svg: <FontAwesomeIcon color='white' icon={faVideo} />,
        list: "비디오 생성"
    },
    {
        link: "/post/create",
        svg: <FontAwesomeIcon color='white' icon={faImage} />,
        list: "게시물 생성"
    }
]