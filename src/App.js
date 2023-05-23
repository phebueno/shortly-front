import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import Menu from "./components/Menu.js";
import { styled } from "styled-components";
import HomePage from "./pages/HomePage.js";
import RankingPage from "./pages/RankingPage.js";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(undefined);
  return (
    <PagesContainer>
      <BrowserRouter>
        <Menu setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<RankingPage user={user}/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage setUser={setUser} />} />
          <Route path="/home" element={<HomePage user={user}/>} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  margin: 0 auto 50px;
  padding: 0 10%;
  max-width: 1020px;
`;
