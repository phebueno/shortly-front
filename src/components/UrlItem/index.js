import { DeleteItem, LinkItem } from "./styled.js";
import trashIcon from "../../assets/trash.png";

export default function UrlItem({ link, deleteUrl, openUrl, getUserData }) {
  return (
    <li>
      <LinkItem onClick={() => openUrl(link.shortUrl, link.url)}>
        <span id="url">{link.url}</span>
        <span id="short-url">{link.shortUrl}</span>
        <span id="visit-count">
          Quantidade de visitantes: {link.visitCount}
        </span>
      </LinkItem>
      <DeleteItem onClick={() => deleteUrl(link.id, getUserData)}>
        <img src={trashIcon} alt="" />
      </DeleteItem>
    </li>
  );
}
