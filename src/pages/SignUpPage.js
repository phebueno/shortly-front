import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SignUpPage() {
  const [cadastroUsuario, setCadastroUsuario] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setCadastroUsuario({ ...cadastroUsuario, [e.target.name]: e.target.value });
  }

  function signup(e) {
    e.preventDefault();
    if (cadastroUsuario.confirmPassword !== cadastroUsuario.password) {
      return alert("As senhas diferem. Tente novamente.");
    } else {
      const url = `${process.env.REACT_APP_API_URL}/signup`;
      axios
        .post(url, cadastroUsuario)
        .then((res) => {
          console.log(res.data);
          navigate("/signin");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data);
        });
    }
  }
  
  useEffect(() => {
    const token = localStorage.getItem("userAuth");
    if (token) return navigate("/home");
  });

  return (
    <Form onSubmit={signup}>
      <input
        type="text"
        name="name"
        value={cadastroUsuario.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={cadastroUsuario.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        value={cadastroUsuario.password}
        onChange={handleChange}
        placeholder="Senha"
      />
      <input
        type="password"
        name="confirmPassword"
        value={cadastroUsuario.confirmPassword}
        onChange={handleChange}
        placeholder="Confirmar senha"
      />

      <button>Criar conta</button>
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
