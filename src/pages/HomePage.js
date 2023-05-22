import { styled } from "styled-components";
import trash from "../assets/trash.png"

export default function HomePage() {
  return (
    <HomeContainer>
      <Form>
        <input type="text" name="" id="" placeholder="Links que cabem no bolso"/>
        <button>Encurtar link</button>
      </Form>
      <LinksContainer>
        <li>
          <LinkItem>
            <span id="url">https://www.driven.com.brzsrgzsdrgzsreg</span>
            <span id="short-url">WWWWWWWW</span>
            <span id="visit-count">Quantidade de visitantes: 271</span>
          </LinkItem>
          <DeleteItem><img src={trash} alt="" /></DeleteItem>
        </li>
        <li>
          <LinkItem>
            <span id="url">https://www.driven.com.br</span>
            <span id="short-url">MMMMMMMM</span>
            <span id="visit-count">Quantidade de visitantes: 10271</span>
          </LinkItem>
          <DeleteItem><img src={trash} alt="" /></DeleteItem>
        </li>
        <li>
          <LinkItem>
            <span id="url">https://www.driven.com.br</span>
            <span id="short-url">e4231A</span>
            <span id="visit-count">Quantidade de visitantes: 271</span>
          </LinkItem>
          <DeleteItem><img src={trash} alt="" /></DeleteItem>
        </li>
        
      </LinksContainer>
    </HomeContainer>
  );
}

const DeleteItem = styled.div`
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
    height:100px;
    width:20%;
    padding: 20px;
    min-width:150px;
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
  span{
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #url{
    width: 30%;
  }
  #short-url{
    width:20%;
  }
  #visit-count{
    width: 40%;
  }
  //Responsividade:
  @media (max-width: 930px) {
    flex-direction: column;
    height:100px;
    width:80%;
    justify-content:space-evenly;
    
    overflow: hidden;
    text-overflow: ellipsis;
    span,#visit-count,#url,#short-url{
      width:100%;
      text-align:center;
      overflow:none;
      text-overflow:none;

  font-size: 20px;
    }
  }
`;

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
