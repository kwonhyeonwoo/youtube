import React from 'react'
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faVideo, faFilm, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
    currentIdx: number | null;
    SidebarMenuClick: (link: string, idx: number) => void;
}
const Sidebar = ({ currentIdx, SidebarMenuClick }: Props) => {
    return (
        <div className='sidebar-wrapper'>
            {sidebarArr.map(({ link, title, svg, }, idx) => (
                <button
                    onClick={() => SidebarMenuClick(link, idx)}
                    className={`sidebar-btn ${idx === currentIdx && "active-sidebar-btn"}`}
                    key={idx}
                >
                    {svg}
                    <p className='sidebar-btn-title'>{title}</p>
                </button>
            ))}
        </div>
    )
};
export default Sidebar;

const sidebarArr = [
    {
        link: "/",
        title: "홈",
        svg: <FontAwesomeIcon color='white' size='1x' icon={faHouse} />
    },
    {
        link: "/play/lists",
        title: "재생목록",
        svg: <FontAwesomeIcon color='white' size='1x' icon={faList} />
    },
    {
        link: "/profile/video",
        title: "내 동영상",
        svg: <FontAwesomeIcon color='white' size='1x' icon={faVideo} />
    },
    {
        link: "/my/movie",
        title: "내 영화",
        svg: <FontAwesomeIcon color='white' size='1x' icon={faFilm} />
    },
    {
        link: "/like/video",
        title: "좋아요 표시한 동영상",
        svg: <FontAwesomeIcon color='white' size='1x' icon={faThumbsUp} />
    }
]