import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/twemoji_shorts.png";

export default function Menu() {
  return (
    <Header>
      <MenuBar>
        <h2>Seja bem vindo (a), Pessoa!</h2>
        <ul>
          <li>
            <Link to="/signin">Entrar</Link>
          </li>
          <li>
            <Link to="/signup">Cadastrar-se</Link>
          </li>
        </ul>
      </MenuBar>
      <Title>
        <h1>Shortly</h1>
        <img src={logo} alt="" />
      </Title>
    </Header>
  );
}

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
  li {
    color: #9c9c9c;
    a,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
      color: inherit;
    }
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
