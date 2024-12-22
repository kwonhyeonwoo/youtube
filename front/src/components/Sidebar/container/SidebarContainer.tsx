import React, { useCallback, useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from 'react-router-dom'

const SidebarContainer = () => {
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState<number | null>(null);

    const SidebarMenuClick = useCallback(
        (link: string, idx: number) => {
            navigate(link);
            setCurrentIdx(idx);
        },
        [navigate, currentIdx],
    )

    return (
        <Sidebar currentIdx={currentIdx} SidebarMenuClick={SidebarMenuClick} />
    )
}

export default SidebarContainer