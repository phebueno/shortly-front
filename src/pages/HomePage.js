import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UrlItem from "../components/UrlItem.js";
import UserContext from "../contexts/UserContext.js";

export default function HomePage({ setUsuarioLogado }) {
  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const [shortUrl, setShortUrl] = useState({
    url: "",
  });

  function deleteUrl(id){
    const token = localStorage.getItem("userAuth");
      if (!token) return navigate("/");
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      };
      const url = `${process.env.REACT_APP_API_URL}/urls/${id}`;
      axios
      .delete(url, config)
      .then((res) => {
        alert("Link deletado!");
        const newLinkArr = userData.shortenedUrls.filter(obj => obj.id !== id);
        //como já recebeu os dados: adiciona manualmente, sem necessidade de nova requisição
        setUsuarioLogado({ ...userData, shortenedUrls:newLinkArr });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  function shortenUrl(e) {
      e.preventDefault();
      const token = localStorage.getItem("userAuth");
      if (!token) return navigate("/");
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      };
      const url = `${process.env.REACT_APP_API_URL}/urls/shorten`;
      axios
        .post(url, shortUrl, config)
        .then((res) => {
          alert("Aqui está o seu link obtido: " + res.data.shortUrl);
          const newLinkArr = userData.shortenedUrls.push({
            id: res.data.id,
            shortUrl: res.data.shortUrl,
            url: shortUrl.url,
            visitCount:0
          });
          //como já recebeu os dados: adiciona manualmente, sem necessidade de nova requisição
          setUsuarioLogado({ ...userData, newLinkArr });
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }

  useEffect(() => {
    const token = localStorage.getItem("userAuth");
    if (!token) return navigate("/");
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
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [setUsuarioLogado, navigate]);

  function handleChange(e) {
    setShortUrl({ ...shortUrl, [e.target.name]: e.target.value });
  }

  return (
    <HomeContainer>
      <Form onSubmit={shortenUrl}>
        <input
          type="text"
          name="url"
          value={shortUrl.email}
          onChange={handleChange}
          placeholder="Links que cabem no bolso"
        />
        <button>Encurtar link</button>
      </Form>
      <LinksContainer>
        {userData && userData.shortenedUrls &&
          userData.shortenedUrls.slice(0).reverse().map((link) => (
            <UrlItem
              key={link.id}
              link={link}
              setUsuarioLogado={setUsuarioLogado}
              deleteUrl={deleteUrl}
            />
          ))}
      </LinksContainer>
    </HomeContainer>
  );
}

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
  li {
    display: flex;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  input {
    width: 70%;
  }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
