import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext.js";

export function useGetUserData() {
  const [userData, setUserData] = useState();
  const { token } = useContext(AuthContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function getUserData() {
    const url = `${process.env.REACT_APP_API_URL}/users/me`;
    axios
      .get(url, config)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  useEffect(() => {
    getUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userData, getUserData };
}

export function useDeleteUrl() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!token) return navigate("/");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (id, getUserData) => {
    const url = `${process.env.REACT_APP_API_URL}/urls/${id}`;
    axios
      .delete(url, config)
      .then((res) => {
        alert("Link deletado!");
        getUserData();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
}

export function useShortenUrl() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!token) return navigate("/");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (body, getUserData, setForm) => {
    const url = `${process.env.REACT_APP_API_URL}/urls/shorten`;
    axios
      .post(url, body, config)
      .then((res) => {
        alert("Aqui está o seu link obtido: " + res.data.shortUrl);
        setForm({
          url: "",
        });
        getUserData();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
}

export function useOpenUrl() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!token) return navigate("/");
  return (shortUrl, urlSite) => {
    const url = `${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`;
    axios
      .get(url)
      .then((res) => {
        //Acesso de CORS não permite acesso normalmente
        window.open(urlSite);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    window.open(urlSite);
    window.location.reload();
  };
}
