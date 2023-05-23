import { styled } from "styled-components";
import trashIcon from "../assets/trash.png";

export default function UrlItem({link, setUsuarioLogado, deleteUrl}) {
  return (
    <li>
      <LinkItem>
        <span id="url">{link.url}</span>
        <span id="short-url">{link.shortUrl}</span>
        <span id="visit-count">Quantidade de visitantes: {link.visitCount}</span>
      </LinkItem>
      <DeleteItem onClick={()=>deleteUrl(link.id)}>
        <img src={trashIcon} alt="" />
      </DeleteItem>
    </li>
  );
}

const DeleteItem = styled.div`
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 200px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  @media (max-width: 930px) {
    flex-direction: column;
    height: 100px;
    width: 20%;
    padding: 20px;
    min-width: 150px;
  }
`;

const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;
  padding: 0 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  span {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #url {
    width: 45%;
  }
  #short-url {
    width: 25%;
  }
  #visit-count {
    width: 30%;
  }
  //Responsividade:
  @media (max-width: 930px) {
    flex-direction: column;
    height: 100px;
    width: 80%;
    justify-content: space-evenly;

    overflow: hidden;
    text-overflow: ellipsis;
    span,
    #visit-count,
    #url,
    #short-url {
      width: 100%;
      text-align: center;
      overflow: none;
      text-overflow: none;

      font-size: 20px;
    }
    span{
      overflow-y:none;
      max-height:33%;
    }
  }
`;
