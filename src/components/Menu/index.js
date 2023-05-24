import {MenuBar, Title, Header, LinkStyle} from "./styled.js"
import { useLocation} from "react-router-dom";
import logo from "../../assets/twemoji_shorts.png";
import useLogout from "../../hooks/useLogout.js";

export default function Menu({ setUser, user }) {
  const location = useLocation();
  const logout = useLogout();

  return (
    <Header>
      {!user && (
        <MenuBar>
          <div></div>
          <ul>
            <li>
              <LinkStyle
                selected={location.pathname === "/signin" && true}
                to="/signin"
              >
                Entrar
              </LinkStyle>
            </li>
            <li>
              <LinkStyle
                selected={location.pathname === "/signup" && true}
                to="/signup"
              >
                Cadastrar-se
              </LinkStyle>
            </li>
          </ul>
        </MenuBar>
      )}
      {user && (
        <MenuBar>
          <h2>Seja bem vindo (a), {user}!</h2>
          <ul>
            <li>
              <LinkStyle
                selected={location.pathname === "/home" && true}
                to="/home"
              >
                Home
              </LinkStyle>
            </li>
            <li>
              <LinkStyle selected={location.pathname === "/" && true} to="/">
                Ranking
              </LinkStyle>
            </li>
            <li>
              <LinkStyle onClick={()=>logout()}>Sair</LinkStyle>
            </li>
          </ul>
        </MenuBar>
      )}
      <Title>
        <h1>Shortly</h1>
        <img src={logo} alt="" />
      </Title>
    </Header>
  );
}

