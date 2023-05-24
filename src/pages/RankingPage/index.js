import {
  RankingBox,
  RankingContainer,
  RankingMessage,
  TitleContainer,
} from "./styled";
import trophy from "../../assets/trophy.png";
import { Oval } from "react-loader-spinner";
import useRanking from "../../services/ranking.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.js";

export default function RankingPage() {
  const { user } = useContext(AuthContext);
  const ranking = useRanking();

  return (
    <RankingContainer>
      <TitleContainer>
        <img src={trophy} alt="" />
        <h2>Ranking</h2>
      </TitleContainer>

      <RankingBox ranking={ranking}>
        {!ranking && <Oval color="#5D9040" secondaryColor="#80CC74" />}
        {ranking &&
          ranking.map((userRank, index) => (
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
