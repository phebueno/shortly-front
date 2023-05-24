import { styled } from "styled-components";

export const RankingMessage = styled.h3`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
`;

export const RankingBox = styled.ul`
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

export const TitleContainer = styled.div`
  display: flex;
  h2 {
    font-weight: 700;
    font-size: 45px;
    line-height: 45px;
  }
`;

export const RankingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
