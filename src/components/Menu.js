import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/twemoji_shorts.png";
import UserContext from "../contexts/UserContext.js";

export default function Menu({ setUsuarioLogado }) {
  const userData = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(loading);

  useEffect(() => {
    if (setLoading === false) return;
    const token = localStorage.getItem("userAuth");
    if (userData) return;
    console.log("chegou a rodar");
    //O resto do código só acontece para permanência de usuário caso ele acesse a página por fora.
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };
    const url = `${process.env.REACT_APP_API_URL}/users/me`;
    axios
      .get(url, config)
      .then((res) => {
        setUsuarioLogado(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        navigate("/")
      });
  }, [setUsuarioLogado, userData]);

  function logout() {
    const logoutConfirmation = window.confirm(
      "Tem certeza de que deseja sair?"
    );
    if (logoutConfirmation) {
      setUsuarioLogado(undefined);
      localStorage.removeItem("userAuth");
    }
  }

  return (
    <Header>
      <MenuBar>
        <h2>
          {!userData && loading && "Carregando..."}
          {userData && `Seja bem vindo (a), ${userData.name}!`}
        </h2>
        {!userData && loading && "Carregando..."}
        {!userData && !loading && (
          <ul>
            <li>
              <Link to="/signin">Entrar</Link>
            </li>
            <li>
              <Link to="/signup">Cadastrar-se</Link>
            </li>
          </ul>
        )}
        {userData && !loading && (
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">Ranking</Link>
            </li>
            <li>
              <Link onClick={logout}>Sair</Link>
            </li>
          </ul>
        )}
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
