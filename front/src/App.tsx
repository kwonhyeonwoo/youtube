import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./core/core.css";
import AccountContainer from "./pages/Account/container/AccountContainer";
import LoginContainer from "./pages/Login/container/LoginContainer";
import { useEffect, useState } from "react";
import RootRouter from "./routes/RootRouter";

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
      <RootRouter isLogin={isLogin} />
    </BrowserRouter>
  );
}

export default App;
