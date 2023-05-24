import { Link, useLocation} from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/twemoji_shorts.png";
import useLogout from "../hooks/useLogout.js";

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

const LinkStyle = styled(Link)`
  color: ${(props) => (props.selected ? "#5d9040" : "#9c9c9c")};
  text-decoration: none;
`;

const MenuBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  h2 {
    color: #5d9040;
  }
  ul {
    display: flex;
    gap: 22px;
  }
`;

const Title = styled.div`
  display: flex;
`;

const Header = styled.header`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 69px 0 87px;
  h1 {
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
  }
`;
