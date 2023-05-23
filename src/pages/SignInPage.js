import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SignInPage({setUser}) {
  const [loginUsuario, setLoginUsuario] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userAuth");
    if (token) return navigate("/home");
  });

  function handleChange(e) {
    setLoginUsuario({ ...loginUsuario, [e.target.name]: e.target.value });
  }
  function signin(e) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/signin`;
    axios
      .post(url, loginUsuario)
      .then((res) => {
        //Cria sessão com armazenamento local
        const dadosSerializados = JSON.stringify(res.data);
        localStorage.setItem("userAuth", dadosSerializados);
        setUser(res.data.name);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  }

  return (
    <Form onSubmit={signin}>
      <input
        type="email"
        name="email"
        value={loginUsuario.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        value={loginUsuario.password}
        onChange={handleChange}
        placeholder="Senha"
      />

      <button>Entrar</button>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 40px;
  button {
    margin-top: 41px;
  }
`;
