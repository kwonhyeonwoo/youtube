import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core/core.css";
import HomeContainer from "./pages/Home/container/HomeContainer";
import AccountContainer from "./pages/Account/container/AccountContainer";
import LoginContainer from "./pages/Login/container/LoginContainer";
import HeaderContainer from "./components/Header/container/HeaderContainer";
import SidebarContainer from "./components/Sidebar/container/SidebarContainer";
import { useEffect, useState } from "react";
import VideoCreateContainer from "./pages/VideoCreate/container/VideoCreateContainer";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const token = localStorage.getItem('refreshToken');

  useEffect(() => {
    if (token) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [isLogin, token])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<AccountContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
      <>
        <HeaderContainer isLogin={isLogin} />
        <SidebarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/video/create" element={<VideoCreateContainer />} />
        </Routes>
      </>

    </BrowserRouter>
  );
}

export default App;
