import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core/core.css";
import HomeContainer from "./pages/Home/container/HomeContainer";
import AccountContainer from "./pages/Account/container/AccountContainer";
import LoginContainer from "./pages/Login/container/LoginContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/account" element={<AccountContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
