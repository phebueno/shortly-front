import { styled } from "styled-components";
import trophy from "../assets/trophy.png";
import { Oval } from "react-loader-spinner";
import useRanking from "../services/ranking.js";

export default function RankingPage({user}) {
  const ranking = useRanking();

  return (
    <RankingContainer>
      <TitleContainer>
        <img src={trophy} alt="" />
        <h2>Ranking</h2>
      </TitleContainer>
      
      <RankingBox ranking={ranking}>
      {!ranking && <Oval color="#5D9040" secondaryColor="#80CC74"/>}
        {ranking && ranking.map((userRank, index) => (
          <li key={index}>
            {index + 1}. {userRank.name} - {userRank.linksCount} links -{" "}
            {userRank.visitCount} visualizações
          </li>
        ))}
      </RankingBox>
      <RankingMessage>
        {!user && "Crie sua conta para usar nosso serviço!"}
      </RankingMessage>
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
  display:flex;
  flex-direction:column;
  align-items:${(props) => (props.ranking ? "start" : "center")};;
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
