import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeContainer from '../pages/Home/container/HomeContainer';
import VideoCreateContainer from '../pages/VideoCreate/container/VideoCreateContainer';
import HeaderContainer from '../components/Header/container/HeaderContainer';
import SidebarContainer from '../components/Sidebar/container/SidebarContainer';
type Props = {
  isLogin:boolean;
};
const RootRouter = ({isLogin}:Props) => {
  return (
    <div>
      <HeaderContainer isLogin={isLogin} />
      <SidebarContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/video/create" element={<VideoCreateContainer />} />
      </Routes>
    </div>
  );
}

export default RootRouter