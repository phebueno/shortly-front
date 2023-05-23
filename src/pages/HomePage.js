import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UrlItem from "../components/UrlItem.js";

export default function HomePage({user}) {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const [shortUrl, setShortUrl] = useState({
    url: "",
  });

  const openUrl = useCallback((shortUrl,urlSite) =>{
    const auth = localStorage.getItem("userAuth");
    if (!auth) return navigate("/");
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
  },[navigate]);

  function deleteUrl(id) {
    const auth = localStorage.getItem("userAuth");
    if (!auth) return navigate("/");
    const { token } = JSON.parse(auth);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_API_URL}/urls/${id}`;
    axios
      .delete(url, config)
      .then((res) => {
        alert("Link deletado!");
        const newLinkArr = userData.shortenedUrls.filter(
          (obj) => obj.id !== id
        );
        //como já recebeu os dados: adiciona manualmente, sem necessidade de nova requisição
        setUserData({ ...userData, shortenedUrls: newLinkArr });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }

  function shortenUrl(e) {
    e.preventDefault();
    const auth = localStorage.getItem("userAuth");
    if (!auth) return navigate("/");
    const { token } = JSON.parse(auth);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
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
          visitCount: 0,
        });
        //como já recebeu os dados: adiciona manualmente, sem necessidade de nova requisição
        setUserData({ ...userData, newLinkArr });
        setShortUrl({url:""});
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }


  console.log(shortUrl);

  useEffect(() => {
    const auth = localStorage.getItem("userAuth");
    if (!auth) return navigate("/");
    const { token } = JSON.parse(auth);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_API_URL}/users/me`;
    axios
      .get(url, config)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [setUserData, navigate, user,openUrl]);

  function handleChange(e) {
    setShortUrl({ ...shortUrl, [e.target.name]: e.target.value });
  }

  return (
    <HomeContainer>
      <Form onSubmit={shortenUrl}>
        <input
          type="text"
          name="url"
          value={shortUrl.url}
          onChange={handleChange}
          placeholder="Links que cabem no bolso"
        />
        <button>Encurtar link</button>
      </Form>
      <LinksContainer>
        {userData &&
          userData.shortenedUrls &&
          userData.shortenedUrls
            .slice(0)
            .reverse()
            .map((link) => (
              <UrlItem
                key={link.id}
                link={link}
                setUserData={setUserData}
                deleteUrl={deleteUrl}
                openUrl={openUrl}
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
