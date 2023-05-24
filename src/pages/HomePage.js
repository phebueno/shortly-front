import { styled } from "styled-components";
import UrlItem from "../components/UrlItem.js";
import { Oval } from "react-loader-spinner";
import useKickOut from "../hooks/useKickOut.js";
import useForm from "../hooks/useForm.js";
import {
  useGetUserData,
  useDeleteUrl,
  useShortenUrl,
  useOpenUrl,
} from "../services/urls.js";

export default function HomePage({ user }) {
  const { form, handleForm, setForm } = useForm({
    url: "",
  });
  const { userData, getUserData } = useGetUserData();
  const deleteUrl = useDeleteUrl();
  const shortenUrl = useShortenUrl();
  const openUrl = useOpenUrl();

  function submitForm(e) {
    e.preventDefault();
    shortenUrl(form, getUserData, setForm);
  }
  useKickOut();

  return (
    <HomeContainer>
      <Form onSubmit={submitForm}>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleForm}
          placeholder="Links que cabem no bolso"
        />
        <button>Encurtar link</button>
      </Form>
      {!userData && <Oval color="#5D9040" secondaryColor="#80CC74" />}
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
                deleteUrl={deleteUrl}
                openUrl={openUrl}
                getUserData={getUserData}
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
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
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
  align-items: center;
`;
