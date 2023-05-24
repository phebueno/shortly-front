import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Menu from "./components/Menu";
import { styled } from "styled-components";
import HomePage from "./pages/HomePage";
import RankingPage from "./pages/RankingPage";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext.js";
function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <PagesContainer>
      <AuthContext.Provider value={{ user, setUser, token, setToken }}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<RankingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  margin: 0 auto 50px;
  padding: 0 10%;
  max-width: 1020px;
`;
