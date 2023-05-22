import { styled } from "styled-components";
import trophy from "../assets/trophy.png";

export default function RankingPage() {
  return (
    <RankingContainer>
      <TitleContainer>
        <img src={trophy} alt="" />
        <h2>Ranking</h2>
      </TitleContainer>
      <RankingBox>
        <li>1. Fulaninha - 32 links - 1.703.584 visualizações</li>
        <li>2. Fulaninha - 32 links - 1.703.584 visualizações</li>
        <li>3. Fulaninha - 32 links - 1.703.584 visualizações</li>
        <li>4. Fulaninha - 32 links - 1.703.584 visualizações</li>
      </RankingBox>
      <RankingMessage>Crie sua conta para usar nosso serviço!</RankingMessage>
    </RankingContainer>
  );
}

const RankingMessage = styled.h3`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
`;

const RankingBox = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 40px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px;
  li {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  h2 {
    font-weight: 700;
    font-size: 45px;
    line-height: 45px;
  }
`;

const RankingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
