import { LinksContainer, Form, HomeContainer } from "./styled";
import UrlItem from "../../components/UrlItem";
import { Oval } from "react-loader-spinner";
import useKickOut from "../../hooks/useKickOut.js";
import useForm from "../../hooks/useForm.js";
import {
  useGetUserData,
  useDeleteUrl,
  useShortenUrl,
  useOpenUrl,
} from "../../services/urls.js";

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
