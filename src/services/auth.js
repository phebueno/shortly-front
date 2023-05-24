import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export function useSignUp() {
  const navigate = useNavigate();

  return (body) => {
    const url = `${process.env.REACT_APP_API_URL}/signup`;
    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
}

export function useSignIn() {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (body) => {
    const url = `${process.env.REACT_APP_API_URL}/signin`;
    axios
      .post(url, body)
      .then((res) => {
        //Cria sessão com armazenamento local
        localStorage.setItem("user", res.data.name);
        localStorage.setItem("token", res.data.token);
        setUser(res.data.name);
        setToken(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log("teste");
        console.log(err.response);
        alert(err.response.data);
      });
  };
}
